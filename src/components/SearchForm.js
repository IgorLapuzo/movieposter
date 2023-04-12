import { useSelector, useDispatch } from 'react-redux';
import classes from './SearchForm.module.css'
import { getInput } from '../store/home-selector'
import { setInput } from '../store/HomeReducer';
import { requestMovies } from '../store/HomeReducer';
import { useEffect } from 'react';

const SearchForm = (props) => {
	const value = useSelector(getInput)
	const dispatch = useDispatch()
	
	const onInputChanged = (event) => {
		dispatch(setInput(event.target.value));
	}

	useEffect(() => {
			const request = setTimeout(() => {
				dispatch(requestMovies(1, value))
				console.log(`dispatch input`)
			},1000)
		
		return () => {
			console.log('cleared')
			clearTimeout(request);
		}
	}, [value])

	return (
		<div className={classes.control}>
			<input 
				placeholder='Search...'
				type='text'
				value={value}
				 onChange={onInputChanged}
			/>
		</div>
	)
}

export default SearchForm;
