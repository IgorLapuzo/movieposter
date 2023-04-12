import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import classes from './Home.module.css';
import bg from '../assets/bg.jpg'

function HomePage() {
	return (
		<div className={classes.root}>
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
						<h1>Find movie or person</h1>
						<div >
							<SearchForm />
						</div>
						<div>Go to the <Link to='movies'>MOVIES</Link> page</div>
						<div> or to the <Link to='actors'>ACTORS</Link> page</div>
					</div>
				</div>
		</div>
	)
}

export default HomePage;
