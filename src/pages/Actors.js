import { Link } from "react-router-dom";

const ACTORS = [
	{id: 1, title: 'Actor 1'},
	{id: 2, title: 'Actor 2'},
	{id: 3, title: 'Actor 3'},
];

function ActorsPage() {
	return (
		<>
			<h1>The Actors page</h1>
			<ul>
				{ACTORS.map((item) => (
					<li key={item.id}>
						<Link to={`${item.id}`}>{item.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default ActorsPage;