import { Link, useParams } from "react-router-dom";
import { requestMovie } from '../../store/MoviesReducer';
import { getMovie } from "../../store/movies-selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import noImage from '../../assets/noImage.jpg';
import classes from './MovieDetail.module.css'

function MovieDetailPage() {
	const movie = useSelector(getMovie)
	const params = useParams();
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(requestMovie(params.movieId))
	}, [])

	return (
		<div className={classes.container}>
			<div className={classes.wraper}>
				<div className={classes.image}>
					<img src={movie.backdrop_path != null ? 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + movie.backdrop_path : noImage} alt='no img' />
				</div>
				<div>
					<div className={classes['title-wraper']}>
						<span className={classes.title}>{movie.original_title}</span>
						<span className={classes.date}>({movie.release_date})</span>
					</div>
					<div>
						<span className={classes.votes}>Rating {movie.vote_average}</span>
					</div>
					<div className={classes.tagline}>{movie.tagline}</div>
					<div className={classes.overview}>{movie.overview}</div>
				</div>
			</div>
			
			<p><Link to='..' relative='path'>Back</Link></p>
		</div>
	);
};

export default MovieDetailPage;