import { Link, useParams } from "react-router-dom";
import { getMovie } from '../../store/MoviesReducer';

function MovieDetailPage(movie) {
	const params = useParams();
	getMovie(params.movieId)

	return (
		<>
			<h1>{movie.original_title}</h1>
			<p>{params.movieId}</p>
			<p><Link to='..' relative='path'>Back</Link></p>
		</>
	);
};

export default MovieDetailPage;