import { React, Suspense, Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { routesDetails } from "../../routes";
import api from "../../services/ApiService";

class MovieDetailsPage extends Component {
    state = {
        genres: "",
        overview: "",
        poster_path: "",
        title: "",
        vote_average: "",
    };
    componentDidMount() {
        const { movieId } = this.props.match.params;
        api.getMovieById(movieId)
            .then(({ genres, overview, poster_path, title, vote_average }) => {
                if (genres) {
                    genres = genres.map((el) => el.name).join(", ");
                }
                if (poster_path) {
                    poster_path = `https://image.tmdb.org/t/p/w500/${poster_path}`;
                }
                this.setState({
                    genres,
                    overview,
                    poster_path,
                    title,
                    vote_average,
                });
            });
    }

    hanleGoBack = () => {
        const { history, location } = this.props;

        history.push({
            pathname: location.state?.pathname || "/",
            state: location.state,
            search: location.state.query ? `query=${location.state.query}` : null,
        });
    };

    render() {
        const id = this.props.match.params.movieId;
        const { genres, overview, poster_path, title, vote_average } = this.state;

        return (
            <>
                <button
                    onClick={this.hanleGoBack}
                    type="button"
                >
                    <span role="img" aria-label="arrow-left-emoji">
                        ←
                    </span>{" "}
                    Go back
                </button>
                <div >
                    <img src={poster_path} alt="movie-poster" />
                    <div >
                        <h2 >{title}</h2>
                        <p >User score: {vote_average * 10}%</p>
                        <h4 >Overview</h4>
                        <p >{overview}</p>
                        <h4 >Genres</h4>
                        <p>{genres}</p>
                    </div>
                </div>
                <div>
                    <h3 >Additional information</h3>
                    <ul>
                        <li >
                            <NavLink
                                to={{
                                    pathname: `/movies/${id}/cast`,
                                    state: {
                                        query: this.props.location.state.query,
                                        pathname: this.props.location.state.pathname,
                                    },
                                }}
                            >
                                Cast
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={{
                                    pathname: `/movies/${id}/reviews`,
                                    state: {
                                        query: this.props.location.state.query,
                                        pathname: this.props.location.state.pathname,
                                    },
                                }}
                            >
                                Reviews
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    {routesDetails.map(({ label, path, exact, component }) => (
                        <Route
                            key={label}
                            path={path}
                            exact={exact}
                            component={component}
                        />
                    ))}
                </Suspense>
            </>
        );
    }
}

export default MovieDetailsPage;