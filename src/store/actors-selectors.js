export const getActors = (state) => {
	return state.actorsPage.actors;
}

export const getTotalPagesCount= (state) => {
	return state.actorsPage.totalPagesCount;
}

export const getCurrentPage= (state) => {
	return state.actorsPage.currentPage;
}

export const getIsFetching= (state) => {
	return state.actorsPage.isFetching;
}

export const getActor= (state) => {
	return state.actorsPage.actor;
}
