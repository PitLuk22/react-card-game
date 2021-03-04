import React, { useState, useEffect } from 'react'
import Timer from './Timer';
import Cell from './Cell'
import styled from 'styled-components';

const GameField = ({ attemptCounter, setAttemptCounter, cells, setCells, time, setTime, limit }) => {

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
		<S.Wrapper>
			<Timer limit={limit} attemptCounter={attemptCounter}>{time}</Timer>
			<S.Field>
				{cells.map((cell, i) => {
					return <Cell key={i} cell={cell} handleClick={handleClick} />
				})}
			</S.Field>
		</S.Wrapper>
	)
}

export default GameField;

const S = {};
S.Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
S.Field = styled.div`
	min-width: 400px;
	display: grid;
	grid-template-columns: repeat(6, 150px);
	grid-template-rows: repeat(4, 150px);
	grid-gap: 10px;
`;
