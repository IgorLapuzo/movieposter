export const getMovies = (state) => {
	return state.homePage.movies;
}

export const getTotalPagesCount= (state) => {
	return state.homePage.totalPagesCount;
}

export const getCurrentPage= (state) => {
	return state.homePage.currentPage;
}

export const getIsFetching= (state) => {
	return state.homePage.isFetching;
}

export const getInput= (state) => {
	return state.homePage.input;
}
