import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/'
})

const TOKEN = 'ff9eb10038e9caac47e863dfcb7e03ca';
const LANG = 'language=en-US';

/*

getMovie (movieId) {
		return instance.get(`movies/` + movieId);	
	},

`${URL}movie/popular?api_key=${TOKEN}&${LANG}&page=${currentPage}
*/

const getMovies = (currentPage=1, moviesFilter='popular') => {
	return instance.get('movie/popular', {
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
	return instance.get(`movie/:id`, {
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

export const movieAPI = {
	getMovies,
	getMovie,
}

export const actorAPI = {
	getActors,
}