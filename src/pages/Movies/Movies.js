import { Link } from "react-router-dom";

const MoviesPage = ({ currentPage, totalItemsCount, pagesSize, onPageChanged, movies, ...props }) => {

	return (
		<>
			<h1>The Movies page</h1>
			<ul>
				{movies.map((item) => (
					<li key={item.id}>
						<Link to={`${item.id}`}>{item.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default MoviesPage;