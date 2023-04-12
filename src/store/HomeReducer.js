import { searchAPI } from '../api/api';

let initialState = {
	movies: [],
	totalPagesCount: 1,
	currentPage: 1,
	isFetching: false,
	input: '',
};

const homeReducer = (state = initialState, action) => {
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
		case 'SET-INPUT': {
			return { ...state, input: action.input}
		}
		default: 
			return state;
	};
}; 

export const setMovies = (movies) => ({ type: 'SET-MOVIES', movies});
export const setCurrentPage = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage});
export const setTotalPagesCount = (totalPagesCount) => ({ type: 'SET-TOTAL-PAGES-COUNT', totalPagesCount});
export const setToggleFetching = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching});
export const setInput = (input) => ({type: 'SET-INPUT', input});

export const requestMovies = (page, input) => {
	return async (dispatch) => {
		dispatch(setToggleFetching(true));
		dispatch(setCurrentPage(page))
		let data = await searchAPI.getSearchMovies(page, input)
		dispatch(setToggleFetching(false));
		dispatch(setMovies(data.results));
		dispatch(setTotalPagesCount(data.total_pages));
	}
}

export default homeReducer;
