import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Paginator from '../../components/Paginator'
import Preloader from '../../components/Preloader';
import noImage from '../../assets/noImage.jpg'
import { requestActors } from '../../store/ActorsReducer' 
import { getCurrentPage, getIsFetching, getTotalPagesCount, getActors } from '../../store/actors-selectors';
import classes from './Actors.module.css'

export const ActorsPage = (props) => {

	const movies = useSelector(getActors)
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
			<h1>The Actors page</h1>
			<ul className={classes['actors-list']}>
				{movies.map((item) => (
					<li key={item.id} actor = {item} className={classes.item}>
						<Link to={`${item.id}`}>
							<div className={classes.description}>
								<div>{item.name}</div>
							</div>
							<img src={item.profile_path != null ? 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + item.profile_path : noImage} alt='no img' />
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