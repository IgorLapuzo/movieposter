import { movieAPI } from '../api/api';

let initialState = {
	movies: [],
	pagesSize: 10,
	totalItemsCount: 0,
	currentPage: 1,
	isFetching: false,
};

const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET-MOVIES': {
			return { ...state, movies: action.movies }
		}
		case 'SET-CURRENT-PAGE': {
			return { ...state, currentPage: action.currentPage}
		}
		case 'SET-TOTAL-COUNT': {
			return { ...state, totalItemsCount: action.totalItemsCount}
		}
		case 'TOGGLE-IS-FETCHING': {
			return { ...state, isFetching: action.isFetching}
		}
		default: 
			return state;
	};
}; 

export const setMovies = (movies) => ({ type: 'SET-MOVIES', movies});
export const setCurrentPage = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage});
export const setTotalItemsCount = (totalItemsCount) => ({ type: 'SET-TOTAL-COUNT', totalItemsCount});
export const setToggleFetching = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching});

export const getMovies = (page, pagesSize) => {
	return async (dispatch) => {
		dispatch(setToggleFetching(true));
		dispatch(setCurrentPage(page))
		let data = await movieAPI.getMovies(page, pagesSize)
		dispatch(setToggleFetching(false));
		dispatch(setMovies(data.items));
		dispatch(setTotalItemsCount(data.totalCount));
	}
}

export default moviesReducer;
