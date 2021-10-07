import { React, Component } from "react";
import api from "../../services/ApiService";

class Reviews extends Component {
    state = {
        reviews: [],
    };
    componentDidMount() {
        const { match } = this.props;
        const movieId = match.params.movieId;

        api.getMovieReviews(movieId)
            .then((data) => {
                this.setState({
                    reviews: data,
                });

            })
    }
    render() {
        return (
            <>
                <ul>
                    {this.state.reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <p>Author:{author}</p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
                {this.state.reviews.length === 0 && (
                    <p>we dont have any reviews for this movie</p>
                )}
            </>
        )
    }
}
export default Reviews;