// https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=d98b6e0cc9c9689fdead469e531a7dbc
// https://api.themoviedb.org/3/genre/movie/list?api_key=d98b6e0cc9c9689fdead469e531a7dbc&language=en-US

const moviesURL: string = "https://api.themoviedb.org/3";

const photoURL: string = "https://image.tmdb.org/t/p"; //w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg.0

const urls = {
    discover: "/discover",
    movie: "/movie",
    genre:"/genre",
    // genre: "/?with_genres="
}

// const timeFrame = {
//     day: "/day",
//     week: "/week"
// }

const apiKey = {
    token: "d98b6e0cc9c9689fdead469e531a7dbc"
}

const photoSize = {
    w45: "/w45",
    w92: "/w92",
    w154: "/w154",
    w185: "/w185",
    w200: "/w200",
    w300: "/w300",
    w400: "/w400",
    w500: "/w500",
    w780: "/w780",
    w1280: "/w1280"
}

export {
    moviesURL,
    photoURL,
    urls,
    apiKey,
    // timeFrame,
    photoSize
};