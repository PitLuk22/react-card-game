import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import GameField from './GameField';
import StartScreen from './StartScreen';
import EndScreen from './EndScreen';
import { StateOfCells, typesOfDifficulty } from '../StateOfCells';

import { AnimatePresence } from 'framer-motion';

function App() {
	const [difficulty, setDifficulty] = useState(typesOfDifficulty.junior)
	const [cells, setCells] = useState([]);
	const [isVictory, setIsVictory] = useState(null) // null - win - lose
	const [time, setTime] = useState(0);
	const [attemptCounter, setAttemptCounter] = useState(0)
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		setCells(StateOfCells.filter((_, i) => i < difficulty.numOfCells))
	}, [difficulty])

	useEffect(() => {
		const endGame = (gameStatus) => {
			history.push('/end')
			setIsVictory(gameStatus)
		}
		// if won
		if (cells.length && cells.every(cell => cell.status === 'opened')) endGame('win');
		// if lose 
		if (cells.length && time > difficulty.limit) endGame('lose');

	}, [cells, time, difficulty, history])

	const handleReset = () => {
		const filteredCells = StateOfCells.filter((_, i) => i < difficulty.numOfCells);
		setIsVictory(null)
		setCells(shuffle(filteredCells))
		setTime(0)
		setAttemptCounter(0)
	}

	const shuffle = (array) => {
		let currentIndex = array.length;

		while (0 !== currentIndex) {
			const randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			let temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	const handleStart = () => {
		setCells(shuffle(cells))
	}

	const handleDiffeculty = (type) => {
		setDifficulty(typesOfDifficulty[type])
	}

	return (
		<div className="app">
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/'>
						<StartScreen
							key={'StartScreen'}
							handleStart={handleStart}
							difficulty={difficulty}
							handleDiffeculty={handleDiffeculty} />
					</Route>
					<Route path='/game'>
						<GameField
							key={'GameField'}
							cells={cells}
							setCells={setCells}
							time={time}
							setTime={setTime}
							difficulty={difficulty}
							attemptCounter={attemptCounter}
							setAttemptCounter={setAttemptCounter} />
					</Route>
					<Route path='/end'>
						<EndScreen
							key={'EndScreen'}
							time={time}
							isVictory={isVictory}
							handleReset={handleReset}
							attemptCounter={attemptCounter} />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
