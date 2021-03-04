import React from 'react'
import styled from 'styled-components';

const StartScreen = ({ currentProgress, handleStart, handleReset, isVictory, attemptCounter }) => {
	return (
		<S.StartScreen>
			{currentProgress === 'start'
				? <span>Welcome to<br /> Pit's gorgeous game!</span>
				: <div>
					{isVictory === 'win' && <span>You won! Congratulations 🎉</span>}
					{isVictory === 'lose' && <span>Time is up! You lose 😭 </span>}
					<br />
					<span className='score'>Your score: <b>{attemptCounter}</b></span>
				</div>}
			<button onClick={currentProgress === 'start' ? handleStart : handleReset}>
				{currentProgress === 'start' ? "Let's start" : 'Try again'}
			</button>
		</S.StartScreen>
	)
}

export default StartScreen

const S = {};
S.StartScreen = styled.div`
	display: flex;
	flex-direction: column;
	width: 630px;
	height: 470px;
	background-color: #1A2026;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	padding: 60px;
	text-align: center;
	box-shadow: 2px 2px 15px  rgba(0,0,0, .5);
	.score {
		font-weight: 500;
		b {
			color: #76FEC5; 	
		}
	}
	span {
		display: block;
		font-size: 35px;
		font-weight: 500;
		text-align: center;
	}
	button {
		margin-top: 70px;
		padding: 20px 80px;
		font-weight: 500;
		background-color: #00FF94;
		border-radius: 10px;
		box-shadow: 0 5px 10px 5px rgba(0,0,0, .3);
		border: none;
		font-size: 25px;
		color: #000;
		cursor: pointer;
	}
`;