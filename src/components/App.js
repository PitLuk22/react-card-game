import React, { useState, useEffect } from 'react';
import GameField from './GameField';
import StartScreen from './StartScreen';
import EndScreen from './EndScreen';
import { StateOfCells, typesOfDifficulty } from '../StateOfCells';
import { AnimatePresence } from 'framer-motion';

function App() {
	const [difficulty, setDifficulty] = useState(typesOfDifficulty.junior) // {limit: 30, numOfCells: 30}
	const [cells, setCells] = useState([]);
	const [isVictory, setIsVictory] = useState(null) // null - win - lose
	const [currentProgress, setCurrentProgress] = useState('start') // start - game - end
	const [time, setTime] = useState(0);
	const [attemptCounter, setAttemptCounter] = useState(0)

	useEffect(() => {
		setCells(StateOfCells.filter((_, i) => i < difficulty.numOfCells))
	}, [difficulty])

	useEffect(() => {
		if (cells.length && cells.every(cell => cell.status === 'opened')) {
			setCurrentProgress('end')
			setIsVictory('win')
		}
		if (cells.length && time > difficulty.limit) {
			setCurrentProgress('end')
			setIsVictory('lose')
		}
	}, [cells, time, difficulty])

	const handleReset = (currentStage = 'game') => {
		setIsVictory(null)
		setCells(StateOfCells.filter((_, i) => i <= difficulty.numOfCells).sort(() => 0.5 - Math.random()))
		setCurrentProgress(currentStage)
		setTime(0)
		setAttemptCounter(0)
	}

	const handleStart = () => {
		setCurrentProgress('game')
		setCells(cells.sort(() => 0.5 - Math.random()))
	}

	const handleToMenu = () => {
		handleReset('start')
	}

	const setDiffeculty = (type) => {
		setDifficulty(typesOfDifficulty[type])
	}

	const render = () => {
		if (currentProgress === 'start') {
			return <StartScreen
				key={currentProgress}
				handleStart={handleStart}
				difficulty={difficulty}
				setDiffeculty={setDiffeculty} />
		} else if (currentProgress === 'end') {
			return <EndScreen
				key={currentProgress}
				handleToMenu={handleToMenu}
				isVictory={isVictory}
				handleReset={handleReset}
				attemptCounter={attemptCounter} />
		} else {
			return <GameField
				key={currentProgress}
				cells={cells}
				setCells={setCells}
				time={time}
				setTime={setTime}
				difficulty={difficulty}
				attemptCounter={attemptCounter}
				setAttemptCounter={setAttemptCounter} />
		}
	}

	return (
		<div className="app">
			<AnimatePresence exitBeforeEnter>
				{render()}
			</AnimatePresence>
		</div>
	);
}

export default App;
