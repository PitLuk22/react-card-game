import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { menuAnim, leftToRight, rightToLeft } from '../animations';
import Confetti from 'react-confetti';
import Button from './Button';

const EndScreen = ({ handleReset, isVictory, attemptCounter, time }) => {
	return (
		<>
			{isVictory === 'win' && <Confetti />}
			<S.EndScreen variants={menuAnim} initial='hidden' animate='show' exit='exit'>
				<div className='flex'>
					<div>
						{isVictory === 'win' && <motion.h2 variants={leftToRight}>You won! Congratulations 🎉</motion.h2>}
						{isVictory === 'lose' && <motion.h2 variants={leftToRight}>Time is up! You lose 😭 </motion.h2>}
						<br />
						<motion.h4 variants={rightToLeft} className='results'>Score: <b>{attemptCounter}</b></motion.h4>
						{isVictory === 'win' && <motion.h4 variants={leftToRight} className='results'>Time: <b>{time - 1} sec</b></motion.h4>}
					</div>
					<S.BtnBlock>
						<Link to='/game' onClick={handleReset}>
							<Button animVariant={leftToRight} size={'small'}>Try again</Button>
						</Link>
						<Link to='/' onClick={handleReset}>
							<Button animVariant={rightToLeft} size={'small'}>Back to menu</Button>
						</Link>
					</S.BtnBlock>
				</div>
			</S.EndScreen>
		</>
	)
}

export default EndScreen;

const S = {};
S.EndScreen = styled(motion.section)`
	width: min(90%, 630px);
	height: 470px;
	background-color: #1A2026;
	color: #fff;
	border-radius: 10px;
	text-align: center;
	box-shadow: 2px 2px 15px  rgba(0,0,0, .5);
	.flex {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		padding: 40px 60px;
		overflow: hidden;
		h2 {
		display: block;
		font-size: 35px;
		font-weight: 600;
		text-align: center;
		}
		.results {
			font-size: 27px;
			font-weight: 500;
			b {
				color: #76FEC5; 	
			}
		}
	}
	@media(max-width: 576px ) {
		.flex {
			padding: 20px 40px;
			h2 {
				font-size: 25px;
			}
			.results {
				font-size: 25px;
				font-weight: 400;
			}
		}
	}
`;

S.BtnBlock = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;

	@media(max-width: 576px) {
		flex-direction: column;
		a {
			width: 100%;
			&:first-child {
				margin-bottom: 20px;
			}
		}
	}
`;