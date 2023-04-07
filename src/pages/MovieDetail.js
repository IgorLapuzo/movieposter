import { Link, useParams } from "react-router-dom";

function MovieDetailPage() {
	const params = useParams();

	return (
		<>
			<h1>The Movie Details</h1>
			<p>{params.movieId}</p>
			<p><Link to='..' relative='path'>Back</Link></p>
		</>
	);
};

export default MovieDetailPage;