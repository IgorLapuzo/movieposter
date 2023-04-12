import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/'
})

const TOKEN = 'ff9eb10038e9caac47e863dfcb7e03ca';
const LANG = 'language=en-US';

const getMovies = (currentPage=1, moviesFilter='popular') => {
	return instance.get(`movie/${moviesFilter}`, {
		params: {
			api_key: TOKEN,
			query: LANG,
			page: currentPage,
		}
	}).then(response => {
		return response.data;
	})
}

const getMovie = (movieId) => {
	return instance.get(`movie/${movieId}`, {
			params: {
				api_key: TOKEN,
				query: LANG,
			}
		}).then(response => {
			return response.data;
		})	
}
	
const getActors = (currentActorsPage=1) => {
	return instance.get('person/popular', {
		params: {
			api_key: TOKEN,
			query: LANG,
			page: currentActorsPage,
		}
	}).then(response => {
		return response.data;
	})
}

const getActor = (actorId) => {
	return instance.get(`person/${actorId}`, {
		params: {
			api_key: TOKEN,
			query: LANG,
		}
	}).then(response => {
		return response.data;
	})	
}

const getSearchMovies = (currentPage=1, input) => {
	return instance.get('search/multi', {
		params: {
			query: input,
			api_key: TOKEN,
			page: currentPage,
		}
	}).then(response => {
		return response.data;
	})
}

export const movieAPI = {
	getMovies,
	getMovie,
}

export const actorAPI = {
	getActors,
	getActor,
}

export const searchAPI = {
	getSearchMovies,
}
