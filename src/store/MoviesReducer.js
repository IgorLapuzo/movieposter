import { movieAPI } from '../api/api';

let initialState = {
	movies: [],
	totalPagesCount: 1,
	currentPage: 1,
	isFetching: false,
	moviesFilter: 'popular',
	movie: '',
};

const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET-MOVIES': {
			return { ...state, movies: action.movies }
		}
		case 'SET-CURRENT-PAGE': {
			return { ...state, currentPage: action.currentPage}
		}
		case 'SET-TOTAL-PAGES-COUNT': {
			return { ...state, totalPagesCount: action.totalPagesCount}
		}
		case 'TOGGLE-IS-FETCHING': {
			return { ...state, isFetching: action.isFetching}
		}
		case 'SET-MOVIE': {
			return { ...state, movie: action.movie}
		}
		case 'SET-MOVIES-FILTER': {
			return { ...state, moviesFilter: action.moviesFilter}
		}
		default: 
			return state;
	};
}; 

export const setMovies = (movies) => ({ type: 'SET-MOVIES', movies});
export const setCurrentPage = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage});
export const setTotalPagesCount = (totalPagesCount) => ({ type: 'SET-TOTAL-PAGES-COUNT', totalPagesCount});
export const setToggleFetching = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching});
export const setMovie = (movie) => ({type: 'SET-MOVIE', movie});
export const setMoviesFilter = (moviesFilter) => ({ type: 'SET-MOVIES-FILTER', moviesFilter});

export const requestMovies = (page, moviesFilter) => {
	return async (dispatch) => {
		dispatch(setToggleFetching(true));
		dispatch(setCurrentPage(page))
		let data = await movieAPI.getMovies(page, moviesFilter)
		dispatch(setToggleFetching(false));
		dispatch(setMovies(data.results));
		dispatch(setTotalPagesCount(data.total_pages));
	}
}

export const requestMovie = (movieId) => {
	return async (dispatch) => {
		let response = await movieAPI.getMovie(movieId);
		dispatch(setMovie(response));
	}
}

export default moviesReducer;
