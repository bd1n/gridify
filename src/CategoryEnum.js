let categories = {};
let order = {};

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

function getRandomChar() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = chars.charAt(Math.floor(Math.random() * chars.length));
        return result;
}
  
function getDecade() {
    const years = [1980, 1990, 2000, 2010, 2020];
    let result = years[Math.floor(Math.random() * years.length)];
    return result;
}

function getGenre() {
    const genre = ["rock", "rap", "pop", "classical", "country", "edm", "jazz", "kpop"];
    let result = genre[Math.floor(Math.random() * genre.length)];
    return result;
}

// function getRandomOrder() {
//     let answer_arr = [];

//     for (let i = 0; i < 6; i++) {
//         let next_num = getRandomInt(1, 6);
//         console.log("answer", answer_arr);

//         while (answer_arr.includes(next_num)) {
//             next_num = getRandomInt(1, 6);
//         }

//         answer_arr.push(next_num);
//     }

//     return answer_arr;
// }

export function setEnum() {
    const genre_type = getGenre();
    const follower_num = getRandomInt(1, 100) * 1000000;
    const name_char = getRandomChar();
    const debut_decade = getDecade();
    const released_year = getRandomInt(2019, 2024);
    const is_group = Math.random() > 0.5;

    categories = Object.freeze({
        Genre: genre_type, //1
        Follower: follower_num, //2
        Name: name_char, //3
        Debut: debut_decade, //4
        Release: released_year, //5
        Is_Group: is_group //6
    });
}

export function setOrder() {
    const answer_arr = [1, 2, 3, 4, 5, 6];
    // console.log(answer_arr);
    order = Object.freeze({
        X1: answer_arr[0], //genre
        X2: answer_arr[1], //follower
        X3: answer_arr[2], //name
        Y1: answer_arr[3], //debut
        Y2: answer_arr[4], //release
        Y3: answer_arr[5] //is_group
    });
}

export function getOrder() {
    return order;
}

export function getEnum() {
    return categories;
}