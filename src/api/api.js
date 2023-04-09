import axios from 'axios';
import key from '../private/key.txt'

const instance = axios.create({
	baseURL: 'https://api.kinopoisk.dev/v1/',
	headers: { "X-API-KEY": {key}} 
})

/*
movies?page=${currentPage}&count=${pagesSize}
*/

export const movieAPI = {
	getMovies (currentPage, pagesSize) {
		return instance.get(`movie/random`)
			.then(response => {
				return response.data;
			})
	},
	//getMovie(movieId) {
	//	return instance.get(`movies/` + movieId);	
	//},
};