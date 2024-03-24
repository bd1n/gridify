import axios from 'axios';
import qs from 'qs';
import { getColCategory, getEnum, getRowCategory } from '../CategoryEnum';

const clientId = "41c7294e188e4d36a29ba3291c01070e";
const clientSecret = "41dcb52e26d9484e8a97bed58ed5d806";

export const getAuth = async () => {
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    // console.log(response);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

export const getSearch = async (artist, row_index, col_index) => {
  //request token using getAuth() function
  const access_token = await getAuth();

  const api_url = "https://api.spotify.com/v1/search?q=remaster%2520" + encodeURIComponent("artist:"+artist) + "&type=artist";
  // https://api.spotify.com/v1/search?q=artist%3ADrake
  console.log(api_url);
  try{
    const response = await axios.get(api_url, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    console.log(response.data)
    let found_name = response.data.artists.items[0].name.toUpperCase();
    console.log("auth side", response.data.artists.items[0].name);

    if(!response.data.artists.items[0] || found_name !== artist.toUpperCase()) {
      console.log("auth side no artist");
      return;
    }
    else {
      const artist_id = response.data.artists.items[0].id; 
      artist = await getArtist(artist_id);
      console.log("got artist:", artist);

      const row_category = getRowCategory(row_index);
      const col_category = getColCategory(col_index);

      console.log("row and col is", row_category, row_index, col_category, col_index);

      const x_valid = await isValidAnswer(artist, row_category);
      console.log("x_valid is", x_valid);
      const y_valid = await isValidAnswer(artist, col_category);
      console.log("y_valid is", y_valid);

      return x_valid&&y_valid?artist.images[0].url:null;
    }
  }catch(error){
    console.log(error);
  }  
};

async function isValidAnswer (artist, category) {
  console.log("category is ", category);
  const param = getEnum()[category];

  switch(category) {
    case 1: //genre
      console.log("in genre", artist.genres, param, category);
      let genre_valid = false;
      for (let i = 0; i<artist.genres.length; i++) {
        if (artist.genres[i].includes(param.toLowerCase())) {
          return true;
        }
      }
      break;

    case 2: //follower
      console.log("in follower", artist.followers.total, param, category);
      if (artist.followers.total >= param) {
        console.log("follower is true");
        return true;
      }
      break;

    case 3: //name
    console.log("in name", artist.name, param, category);
    if (artist.name.charAt(0).toUpperCase() === param.toUpperCase()) {
      console.log("name is true");
      return true;
    }
      break;

    case 4: //debut
      console.log("in debut", artist.name, param, category);
      const debut_decade = await getDebuteDate(artist.id);
      if (debut_decade === param) {
        console.log("debut is true");
        return true;
      }
      console.log("debut is false");
      break;

    case 5: //release
      console.log("in release", artist.name, param, category);
      const release_date = await getLatestRelease(artist.id);

      if (release_date === param) {
        console.log("release is true");
        return true;
      }
      break;

    case 6: //is_Group -- name
      const split_name = artist.name.split(" ");
      console.log("in name", artist.name, "param is", param, "name is", split_name.length, "words, and category",category);
      if (param <= 2) {
        return split_name.length===param;
      }
      else if (param >= 3) {
        return split_name.length>=3;
      }
      break;
    default:
      return false;
  }
  return false;
}

export const getLatestRelease = async (artist_id) => {
  //request token using getAuth() function
  const access_token = await getAuth();
  //console.log(access_token);

  const api_url = `https://api.spotify.com/v1/artists/${artist_id}/albums?limit=1`;
  //console.log(api_url);
  try{
    const response = await axios.get(api_url, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    console.log("GET RELEASE", response.data);
    let date = parseInt(response.data.items[0].release_date.slice(0, 4));
    console.log("returning latest release date", date);
    return date;
  }catch(error){
    console.log(error);
  }  
};

const getDebuteDate = async (artist_id) => {
//request token using getAuth() function
const access_token = await getAuth();
//console.log(access_token);

const api_url = `https://api.spotify.com/v1/artists/${artist_id}/albums?include_groups=album&limit=1`;
//console.log(api_url);
try{
  let response = await axios.get(api_url, {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });

  const offset = response.data.total-1

  response = await axios.get(api_url+"&offset="+offset, {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });

  let date = parseInt(response.data.items[0].release_date.slice(0, 4));
  console.log(response.data, date)
  while (date % 10 !== 0) {
    date -= 1;
    console.log("date is ", date);
  }

  console.log("returning", date);
  return date;
}catch(error){
  console.log(error);
}  
}

export const getArtist = async (artist_id) => {
  //request token using getAuth() function
  const access_token = await getAuth();
  //console.log(access_token);

  const api_url = `https://api.spotify.com/v1/artists/${artist_id}`;
  //console.log(api_url);
  try{
    const response = await axios.get(api_url, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    // console.log("GET ARTIST", response.data);
    return response.data;
  }catch(error){
    console.log(error);
  }  
};