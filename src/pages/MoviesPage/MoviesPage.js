import { React, Component } from "react";
import QueryString from "query-string"
import api from "../../services/ApiService"


import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";

class MoviesPage extends Component {
    state = {
        query: "",
        movies: [],
        error: "",
    }
    componentDidMount() {
        const { location } = this.props;
        const query = QueryString.parse(location.search).query;
        query && this.setState({ query });
    }

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.query;
        const { query } = this.state;

        if (prevQuery.toLowerCase() !== query.toLowerCase()) {
            api
                .getMoviesOnSearch(query)
                .then((movies) => {
                    if (movies.length === 0) throw new Error("no movies found");
                    this.setState({ movies, error: "" });
                })
                .catch((error) => {
                    this.setState({
                        movies: [],
                        error: error?.response?.data?.errors[0] ?? error.message,
                    });
                });
        }
    }
    onSearchSubmit = (query) => {
        this.setState({ query });
        this.props.history.push({ search: `query=${query}` })
    };
    render() {
        const { movies, error } = this.state;
        return (
            <>

                <SearchForm onSubmit={this.onSearchSubmit} />
                {movies.length > 0 && <MovieList movies={movies} />}
                {error && <p>{error}</p>}
            </>
        );
    }
}
export default MoviesPage;