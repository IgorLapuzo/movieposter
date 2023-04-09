import { useEffect } from "react";
import { getMovies } from '../../store/MoviesReducer';
import MoviesPage from './Movies';
import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";

const MoviesContainer = () => {
	useEffect(() => {props.getMovies(props.currentPage, props.pagesSize)}, [])
	const movies = useSelector ((state) => {state.moviesPage.movies})
	
	const onPageChanged = (pageNumber) => {
		props.getMovies(pageNumber, props.pagesSize);
	}

	return <>
		<MoviesPage totalItemsCount = {props.totalItemsCount}
			pagesSize = {props.pagesSize}
			currentPage = {props.currentPage}
			onPageChanged = {onPageChanged}
			movies = {movies}
		/>
	</>
}

export default compose()(MoviesContainer);