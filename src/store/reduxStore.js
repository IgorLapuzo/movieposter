import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import moviesReducer from './MoviesReducer';
import actorsReducer from './ActorsReducer';
import homeReducer from './HomeReducer';

let reducers = combineReducers({
	moviesPage: moviesReducer,
	actorsPage: actorsReducer,
	homePage: homeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;