import { React, Component } from "react";
import api from "../../services/ApiService";


class Cast extends Component {
    state = {
        cast: [],
    }

    componentDidMount() {
        const { match } = this.props;
        const movieId = match.params.movieId;

        api.getMovieCredits(movieId)
            .then((data) => {
                data = data.map((el) => {
                    if (el.profile_path) {
                        el.profile_path = `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    }
                    return { ...el };
                });
                this.setState({
                    cast: data,
                });

            })
    }
    render() {
        return (
            <ul>
                {
                    this.state.cast.map(({ id, profile_path, name, character }) => (
                        <li key={id}>
                            <img
                                src={profile_path}
                                alt="actor"
                            />
                            <div>
                                <p>{name}</p>
                                <p>{character}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
export default Cast;