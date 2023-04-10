import { actorAPI } from '../api/api';

let initialState = {
	actors: [],
	totalPagesCount: 1,
	currentPage: 1,
	isFetching: false
};

const actorsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET-ACTORS': {
			return { ...state, actors: action.actors }
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
		default: 
			return state;
	};
}; 

export const setActors = (actors) => ({ type: 'SET-ACTORS', actors});
export const setCurrentPage = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage});
export const setTotalPagesCount = (totalPagesCount) => ({ type: 'SET-TOTAL-PAGES-COUNT', totalPagesCount});
export const setToggleFetching = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching});

export const requestActors = (page) => {
	return async (dispatch) => {
		dispatch(setToggleFetching(true));
		dispatch(setCurrentPage(page))
		let data = await actorAPI.getActors(page)
		dispatch(setToggleFetching(false));
		dispatch(setActors(data.results));
		dispatch(setTotalPagesCount(data.total_pages));
	}
}

export default actorsReducer;