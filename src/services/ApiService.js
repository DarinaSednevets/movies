import axios from "axios";
import { Component } from "react";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "023fa9d9be7b729569ef9e82c9ca4a2e";

const names = {
    trendings: "/trending/movie/day",
    search: "/search/movie",
    movie: "/movie/",
};
class ApiService extends Component {

    getTradingMovies() {
        return axios
            .get(`${BASE_URL}${names.trendings}?api_key=${API_KEY}`)
            .then((response) => response.data.results)
    }

    getMoviesOnSearch(query) {
        return axios
            .get(`${BASE_URL}${names.search}?api_key=${API_KEY}&query=${query}`)
            .then((response) => response.data.results);
    }

    getMovieById(movieId) {
        return axios
            .get(`${BASE_URL}${names.movie}${movieId}?api_key=${API_KEY}`)
            .then((response) => response.data);
    }

    getMovieCredits(movieId) {
        return axios
            .get(`${BASE_URL}${names.movie}${movieId}/credits?api_key=${API_KEY}`)
            .then((response) => response.data.cast)
    }
    getMovieReviews(movieId) {
        return axios
            .get(`${BASE_URL}${names.movie}${movieId}/reviews?api_key=${API_KEY}`)
            .then((response) => response.data.results);
    }
}
export default new ApiService();