import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Paginator from '../../components/Paginator';
import Preloader from '../../components/Preloader';
import noImage from '../../assets/noImage.jpg'
import { requestActors } from '../../store/ActorsReducer' 
import { getCurrentPage, getIsFetching, getTotalPagesCount, getActors } from '../../store/actors-selectors';
import classes from '../Movies/Movies.module.css'

export const ActorsPage = (props) => {

	const actors = useSelector(getActors)
	const totalPagesCount = useSelector(getTotalPagesCount)
	const currentPage = useSelector(getCurrentPage)
	const isFetching = useSelector(getIsFetching)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(requestActors(currentPage))
	}, [])

	const onPageChanged = (pageNumber) => {
		dispatch(requestActors(pageNumber))
	}

	return (
		<div className={classes.wrapper}>
			{ isFetching ? <Preloader /> : null }
			<ul className={classes['movie-list']}>
				{actors.map((item) => (
					<li key={item.id} actor = {item} className={classes.item}>
						<Link to={`${item.id}`}>
							<img src={item.profile_path != null ? 'https://www.themoviedb.org/t/p/w235_and_h235_face/' + item.profile_path : noImage} alt='no img' />
							<div className={classes.description}>
								<div className={classes.title}>{item.name}</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
			<div>
				<Paginator className = {classes.paginatorWraper}
					currentPage={currentPage}
					onPageChanged={onPageChanged}
					totalPagesCount={totalPagesCount}
				/>
			</div>
		</div>
	);
};

export default ActorsPage;
