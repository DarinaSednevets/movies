import { React, Component } from "react";
import MovieList from "../../components/MovieList/MovieList";
// import axios from "axios";
import api from "../../services/ApiService"


class HomePage extends Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        api
            .getTradingMovies()
            .then((movies) => {
                this.setState({ movies });
            })
            .catch(console.log);

    }


    render() {
        const { movies } = this.state;
        return (
            <>
                <h1>Tranding movies today</h1>
                <MovieList
                    pathname={this.props.location.pathname}
                    movies={movies} />
            </>

        )
    }
}
export default HomePage;