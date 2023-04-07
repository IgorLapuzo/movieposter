import * as axios from 'axios';
import key from '../private/key.txt'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://api.kinopoisk.dev/v1/',
	headers: { "X-API-KEY": {key}} 
})

export const movieAPI = {
	getMovies (currentPage, pagesSize) {
		return instance.get(`movies?page=${currentPage}&count=${pagesSize}`)
			.then(response => {
				return response.data;
			})
	},
	getMovie(movieId) {
		return instance.get(`movies/` + movieId);	
	},
};

export const actorAPI = {
	getActors (currentPage, pagesSize) {
		return instance.get(`actors?page=${currentPage}&count=${pagesSize}`)
			.then(response => {
				return response.data;
			})
	},
	getActor(actorId) {
		return instance.get(`actors/` + actorId);	
	},
};

