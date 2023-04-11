import { Link, useParams } from "react-router-dom";
import { requestActor } from '../../store/ActorsReducer';
import { getActor } from "../../store/actors-selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import noImage from '../../assets/noImage.jpg';
import classes from '../Movies/MovieDetail.module.css'

function ActorDetailPage() {
	const actor = useSelector(getActor)
	const params = useParams();
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(requestActor(params.actorId))
	}, [])

	return (
		<div className={classes.container}>
			<div className={classes.wraper}>
				<div className={classes.image}>
					<img src={actor.profile_path != null ? 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + actor.profile_path : noImage} alt='no img' />
				</div>
				<div>
					<div className={classes['title-wraper']}>
						<div className={classes.title}>{actor.name}</div>
					</div>
					<div className={classes.overview}>{actor.birthday}</div>
					<div className={classes.overview}>{actor.biography}</div>
				</div>
			</div>
			<p><Link to='..' relative='path'>Back</Link></p>
		</div>
	);
};

export default ActorDetailPage;