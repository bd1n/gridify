import axios from 'axios';
import qs from 'qs';

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

export const getAudioFeatures_Track = async (track_id) => {
  //request token using getAuth() function
  const access_token = await getAuth();
  //console.log(access_token);

  const api_url = `https://api.spotify.com/v1/audio-features/${track_id}`;
  //console.log(api_url);
  try{
    const response = await axios.get(api_url, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    console.log(response.data);
    return response.data;
  }catch(error){
    console.log(error);
  }  
};

export const getSearch = async (artist, first_param, second_param) => {
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
    
    console.log("auth side", response.data.artists.items[0].name);

    if(!response.data.artists.items[0] || response.data.artists.items[0].name !== artist) {
      console.log("auth side no artist");
      return;
    }
    else {
      const artist_id = response.data.artists.items[0].id; 
      artist = await getArtist(artist_id);
      console.log("got artist:", artist)
      return artist_id;
    }
  }catch(error){
    console.log(error);
  }  
};

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