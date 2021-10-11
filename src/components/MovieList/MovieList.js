import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

const MovieList = ({ movies, query, pathname }) => {
    return (
        <>
            <ul>{
                movies.map(({ id, title }) => {
                    return (
                        <li key={id}>
                            <Link to={{
                                pathname: `/movies/${id}`,
                                state: {
                                    query,
                                    pathname,
                                },
                            }}
                            >
                                {title}
                            </Link>
                        </li>
                    )
                })
            }
            </ul>
        </>
    )
}
export default MovieList;

PropTypes.MovieList = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    )
}