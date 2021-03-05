import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { menuAnim, leftToRight, rightToLeft } from '../animations';

const StartScreen = ({ handleToMenu, handleReset, isVictory, attemptCounter }) => {
	return (
		<S.StartScreen variants={menuAnim} initial='hidden' animate='show' exit='exit'>
			<div className='wrapper'>
				<div>
					{isVictory === 'win' && <motion.span variants={leftToRight}>You won! Congratulations 🎉</motion.span>}
					{isVictory === 'lose' && <motion.span variants={leftToRight}>Time is up! You lose 😭 </motion.span>}
					<br />
					<motion.span variants={rightToLeft} className='score'>Your score: <b>{attemptCounter}</b></motion.span>
				</div>
				<S.BtnBlock>
					<motion.button variants={leftToRight} onClick={handleReset}>Try again</motion.button>
					<motion.button variants={rightToLeft} onClick={handleToMenu}>Back to menu</motion.button>
				</S.BtnBlock>
			</div>
		</S.StartScreen>
	)
}

export default StartScreen;

const S = {};
S.StartScreen = styled(motion.div)`
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
	text-align: center;
	box-shadow: 2px 2px 15px  rgba(0,0,0, .5);
	.wrapper {
		width: 100%;
		padding: 0 60px;
		overflow: hidden;
	}
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
`;
S.BtnBlock = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	button {
		margin-top: 70px;
		padding: 20px 0;
		width: 200px; 
		font-weight: 500;
		background-color: #00FF94;
		border-radius: 10px;
		box-shadow: 0 5px 10px 5px rgba(0,0,0, .3);
		border: none;
		font-size: 25px;
		color: #000;
		cursor: pointer;
		&:hover {
			transition: all .5s ease;
			background-color: #00cb76;
		}
	}
`;