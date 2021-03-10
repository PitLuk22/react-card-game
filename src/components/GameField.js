import React, { useState, useEffect } from 'react'
import Timer from './Timer';
import Cell from './Cell'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
const GameField = ({ attemptCounter, setAttemptCounter, cells, setCells, time, setTime, difficulty }) => {

	const [firstSelectedCell, setFirstSelectedCell] = useState([])

	useEffect(() => {
		let counter = setInterval(() => {
			setTime(time => time + 1)
		}, 1000)

		return () => clearInterval(counter)
	}, [setTime])

	const handleClick = (cell) => {
		// First entrie
		if (firstSelectedCell.length <= 1) {
			setFirstSelectedCell(firstSelectedCell => [...firstSelectedCell, cell])
			setCells(setActiveCells(cell))
		}
		// Second entrie
		if (firstSelectedCell.length === 1) {
			let newCells = setActiveCells(cell);
			const isCoincedence = firstSelectedCell[0].name === cell.name;
			if (isCoincedence) {
				setCells(newCells.map(item => item.status === 'active' ? { ...item, status: 'opened' } : { ...item }));
				setFirstSelectedCell([])
				setAttemptCounter(attemptCounter + 1)
			} else {
				setTimeout(() => {
					setCells(newCells.map(item => item.status === 'active' ? { ...item, status: 'closed' } : { ...item }));
					setFirstSelectedCell([])
					setAttemptCounter(attemptCounter + 1)
				}, 400);
			}
		}
	}

	const setActiveCells = (cell) => {
		return cells.map(item => item.id === cell.id ? { ...item, status: 'active' } : { ...item })
	}

	return (
		<S.Wrapper variants={fadeIn} initial='hidden' animate='show' exit='exit'>
			<Timer limit={difficulty.limit} attemptCounter={attemptCounter}>{time}</Timer>
			<S.Field difficulty={difficulty}>
				{cells.map((cell, i) => {
					return <Cell key={i} cell={cell} handleClick={handleClick} />
				})}
			</S.Field>
		</S.Wrapper>
	)
}

export default GameField;

const S = {};
S.Wrapper = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 20px;
`;
S.Field = styled.div`
	min-width: 100px;
	display: grid;
	grid-template-columns: ${props => `repeat(${props.difficulty.columns}, minmax(30px, 150px))`};
	grid-template-rows: ${props => `repeat(${props.difficulty.numOfCells / props.difficulty.columns}, min(20vw, 150px))`};
	grid-gap: 10px;
	@media(max-width: 576px) {
		grid-gap: 5px;
	}
`;
