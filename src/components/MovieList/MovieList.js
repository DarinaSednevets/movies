import { Link } from 'react-router-dom'


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