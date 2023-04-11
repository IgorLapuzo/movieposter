import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Paginator from '../../components/Paginator'
import Preloader from '../../components/Preloader';
import noImage from '../../assets/noImage.jpg'
import MoviesSearchForm from '../../components/MoviesSearchForm';
import { FilterType, requestMovies } from '../../store/MoviesReducer' 
import { getCurrentPage, getIsFetching, getTotalPagesCount, getMovies, getMoviesFilter } from '../../store/movies-selectors';
import classes from './Movies.module.css'

export const MoviesPage = (props) => {

	const movies = useSelector(getMovies)
	const totalPagesCount = useSelector(getTotalPagesCount)
	const currentPage = useSelector(getCurrentPage)
	const filter = useSelector(getMoviesFilter)
	const isFetching = useSelector(getIsFetching)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(requestMovies(currentPage, filter))
	}, [])

	const onPageChanged = (pageNumber) => {
		dispatch(requestMovies(pageNumber, filter))
	}

	const onFilterChanged = (filter) => {
		dispatch(requestMovies(1, filter))
	}

	return (
		<div className={classes.wrapper}>
			{ isFetching ? <Preloader /> : null }
			<MoviesSearchForm onFilterChanged={onFilterChanged} />
			<ul className={classes['movie-list']}>
				{movies.map((item) => (
					<li key={item.id} movie = {item} className={classes.item}>
						<Link to={`${item.id}`}>
							<div>
								<img src={item.backdrop_path != null ? 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.poster_path : noImage} alt='no img' />
							</div>
							<div className={classes.description}>
								<div className={classes.title}>{item.title}</div>
								<div>{item.vote_average}</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
			<div>
				<Paginator className = {classes.paginatorWraper}
					currentPage={currentPage}
					onPageChanged={onPageChanged}
					totalPagesCount={totalPagesCount}
				/>
			</div>
		</div>
	);
};


