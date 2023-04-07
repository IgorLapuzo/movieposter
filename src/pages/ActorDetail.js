import { Link, useParams } from "react-router-dom";

function ActorDetailPage() {
	const params = useParams();

	return (
		<>
			<h1>The Actor Details</h1>
			<p>{params.actorId}</p>
			<p><Link to='..' relative='path'>Back</Link></p>
		</>
	);
};

export default ActorDetailPage;