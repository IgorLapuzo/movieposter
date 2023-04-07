import { Link } from "react-router-dom";


function MoviesPage() {
	return (
		<>
			<h1>The Movies page</h1>
			<div className = {classes.paginatorWraper}>
				<Paginator
					currentPage={currentPage}
					onPageChanged={onPageChanged}
					totalItemsCount={totalItemsCount}
					pagesSize={pagesSize}
				/>
			</div>
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