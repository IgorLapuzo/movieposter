import { createStore, combineReducers } from 'redux;'
import moviesReducer from './MoviesReducer';

let reducers = combineReducers({
	moviesPage: moviesReducer,
});

const store = createStore(reducers)

export default store;