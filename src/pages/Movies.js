import { Link } from "react-router-dom";

const MOVIES = [
	{id: 1, title: 'movie 1'},
	{id: 2, title: 'movie 2'},
	{id: 3, title: 'movie 3'},
];

function MoviesPage() {
	return (
		<>
			<h1>The Movies page</h1>
			<ul>
				{MOVIES.map((item) => (
					<li key={item.id}>
						<Link to={`${item.id}`}>{item.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default MoviesPage;