import classes from './MoviesSearchForm.module.css'

const MoviesSearchForm = (props) => {
	return (
		<div className={classes.control}>
			<input 
				placeholder='Search...'
				type='text'
				onChange={props.searchChangeHandler}
			/>
		</div>
	)
}

export default MoviesSearchForm;