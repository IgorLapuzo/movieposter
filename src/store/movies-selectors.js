import { createSelector } from 'reselect';

const getMoviesSelector = (state) => {
	return state.moviesPage.movies;
}

export const getMovies = createSelector(getMoviesSelector,
	(movies) => {
		return movies.filter(m => true);
	}
)
 
export const getTotalPagesCount= (state) => {
	return state.moviesPage.totalPagesCount;
}

export const getCurrentPage= (state) => {
	return state.moviesPage.currentPage;
}

export const getIsFetching= (state) => {
	return state.moviesPage.isFetching;
}

export const getMoviesFilter= (state) => {
	return state.moviesPage.moviesFilter;
}
