import React, { useState } from "react";
import classes from './Paginator.module.css';
import cn from 'classnames';

let Paginator = ({ totalPagesCount, currentPage, onPageChanged, portionSize = 10 }) => {
	let pages = [];
	for (let i = 1; i <= totalPagesCount; i++) {
		pages.push(i);
	};

	let portionCount = Math.ceil (totalPagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div className = {classes.paginator}> 
			{ portionNumber > 1 && 
			<button className = {classes.buttonL} onClick = {() => { setPortionNumber(portionNumber - 1)}}>Prev</button>}
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p => {
				return <span className={cn({
					[classes.selectedPage] : currentPage === p 
				}, classes.pageNumber)}
					key = {p}
					onClick={(e) => {
						onPageChanged(p);
					}}>{p}</span>
			})}
			{ portionCount > portionNumber &&
				<button className = {classes.buttonR} onClick = {() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
		</div>
	)	
}			

export default Paginator;