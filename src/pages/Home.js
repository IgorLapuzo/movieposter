import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import classes from './Home.module.css';
import bg from '../assets/bg.jpg'
import noImage from '../assets/noImage.jpg';
import { useSelector } from 'react-redux';
import Preloader from '../components/Preloader';
import { getMovies, getIsFetching  } from '../store/home-selector';

function HomePage() {
	
	const movies = useSelector(getMovies)
	const isFetching = useSelector(getIsFetching)

	return (
		<div>
			<div style={{
				backgroundImage: `url(${bg})`,
				position: 'fixed',
				top: '0',
				height: '100vh',
				width: '100%',
				overflowY: 'clip',
			}}>
			</div>
				<div className={classes.container}>
					<div className={classes.panel}>
						<h1>Movie Poster App</h1>
						<div>Find movie or person</div>
						<div >
							<SearchForm />
						</div>
						<div>Go to the <Link to='movies'>MOVIES</Link> page</div>
						<div> or to the <Link to='actors'>ACTORS</Link> page</div>
						<div>
							{ isFetching ? <Preloader /> : null }
							<ul className={classes['movie-list']}>
								{movies.map((item) => (
								<li key={item.id} movie = {item} className={classes.item}>
									<Link to={
											item.name ? `actors/${item.id}` : `movies/${item.id}`
										}>
										<div>
											<img src={item.backdrop_path != null ? 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.poster_path : noImage} alt='no img' />
										</div>
										<div className={classes.description}>
											<div className={classes.title}>{item.title || item.name}</div>
											<div>{item.vote_average}</div>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>	
			</div>
		</div>
	)
}

export default HomePage;
