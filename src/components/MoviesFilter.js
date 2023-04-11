import classes from './MoviesFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesFilter } from '../store/movies-selectors';
import { requestMovies, setMoviesFilter } from '../store/MoviesReducer';

const MoviesFilter = (props) => {
  
  const filter = useSelector(getMoviesFilter)
	const dispatch = useDispatch()

  const onFilterChanged = (event) => {
    dispatch(setMoviesFilter(event.target.value))
		dispatch(requestMovies(1, event.target.value))
	}

  return (
    <div className={classes.filter}>
      <div className={classes.control}>
        <label>Filter</label>
        <select value={filter} onChange={onFilterChanged}>
          <option value='popular'>Popular</option>
          <option value='top_rated'>Top rated</option>
          <option value='upcoming'>Upcoming</option>
          <option value='now_playing'>Now playing</option>
        </select>
      </div>
    </div>
  );
};

export default MoviesFilter;