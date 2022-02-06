// const moviesURL: string = "https://api.themoviedb.org/3/discover/movie?api_key=d98b6e0cc9c9689fdead469e531a7dbc&page=21";
// const moviesURL: string = "https://api.themoviedb.org/3/movie/550?api_key=d98b6e0cc9c9689fdead469e531a7dbc";
// const trendingMoviesURL: string = "https://api.themoviedb.org/3/trending/movie/week?api_key=d98b6e0cc9c9689fdead469e531a7dbc";
const trendingMoviesURL: string = "https://api.themoviedb.org/3/trending";

const moviesURL: string = "https://api.themoviedb.org/3/discover";

const photoURL: string = "https://image.tmdb.org/t/p"; //w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg

const urls = {
    movie: "/movie",
    images: "/images"
}

const timeFrame = {
    day: "/day",
    week: "/week"
}

const apiKey = {
    api: "?api_key=d98b6e0cc9c9689fdead469e531a7dbc"
}

const photoSize = {
    w200: "/w200",
    w300: "/w300"
}

export {
    moviesURL,
    trendingMoviesURL,
    photoURL,
    urls,
    apiKey,
    timeFrame,
    photoSize
};