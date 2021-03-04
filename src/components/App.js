import React, { useState, useEffect } from 'react';
import GameField from './GameField';
import StartScreen from './StartScreen';
import { StateOfCells } from '../StateOfCells';

function App() {
	const limit = 60; // seconds
	const [cells, setCells] = useState([]);
	const [isVictory, setIsVictory] = useState(null) // null - win - lose
	const [currentProgress, setCurrentProgress] = useState('start') // start - game - end
	const [time, setTime] = useState(0);
	const [attemptCounter, setAttemptCounter] = useState(0)

	useEffect(() => {
		shuffledCells()
	}, [])

	useEffect(() => {
		if (cells.length && cells.every(cell => cell.status === 'opened')) {
			setCurrentProgress('end')
			setIsVictory('win')
		}
		if (cells.length && time > limit) {
			setCurrentProgress('end')
			setIsVictory('lose')
		}
	}, [cells, time])

	const shuffledCells = () => {
		setCells(StateOfCells.sort(() => 0.5 - Math.random()))
	}

	const handleReset = () => {
		setIsVictory(null)
		setCells(shuffledCells)
		setCurrentProgress('game')
		setTime(0)
		setAttemptCounter(0)
	}

	const handleStart = () => {
		setCurrentProgress('game')
	}

	const render = () => {
		return currentProgress === 'start' || currentProgress === 'end'
			? <StartScreen
				currentProgress={currentProgress}
				handleStart={handleStart}
				isVictory={isVictory}
				handleReset={handleReset}
				attemptCounter={attemptCounter} />
			: <GameField
				cells={cells}
				setCells={setCells}
				time={time}
				setTime={setTime}
				limit={limit}
				attemptCounter={attemptCounter}
				setAttemptCounter={setAttemptCounter} />
	}

	return (
		<div className="app">
			{render()}
		</div>
	);
}

export default App;
