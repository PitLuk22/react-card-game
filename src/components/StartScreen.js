import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, rightToLeft, leftToRight, topToBottom, bottomToTop, leftToRightOpacity, widthLeftToRight, widthRightToLeft } from '../animations';

const StartScreen = ({ handleStart, difficulty, handleDiffeculty }) => {

	const marker = useRef(null);

	useEffect(() => {
		const btn = document.querySelector('.item.active');
		marker.current.style.width = btn.offsetWidth + "px";
		marker.current.style.left = btn.offsetLeft + "px";
	}, [difficulty])

	const setActiveTab = (type) => difficulty.name === type ? 'item active' : 'item';

	return (
		<S.StartScreen variants={fadeIn} initial='hidden' animate='show' exit='exit'>
			<div className='flex'>
				<motion.h1 variants={topToBottom}>Welcome to<br /> Pit's Memorize!</motion.h1>
				<S.Diffeculty>
					<S.Divider variants={widthLeftToRight} />
					<motion.h3 variants={bottomToTop}>Choose your grade:</motion.h3>
					<div className='settings'>
						<motion.div
							variants={leftToRight}
							className={setActiveTab('junior')}
							onClick={() => handleDiffeculty('junior')}>Junior</motion.div>
						<motion.div
							variants={fadeIn}
							className={setActiveTab('middle')}
							onClick={() => handleDiffeculty('middle')}>Middle</motion.div>
						<motion.div
							variants={rightToLeft}
							className={setActiveTab('senior')}
							onClick={() => handleDiffeculty('senior')}>Senior</motion.div>
						<S.Marker variants={leftToRightOpacity} ref={marker} difficulty={difficulty} id="marker" />
					</div>
					<S.Divider variants={widthRightToLeft} />
				</S.Diffeculty>
				<Link to='/game' onClick={handleStart}>
					<motion.button variants={bottomToTop}>
						Let's start
					</motion.button>
				</Link>
			</div>
		</S.StartScreen>
	)
}

export default StartScreen;

const S = {};
S.StartScreen = styled(motion.section)`
	width: 630px;
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
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding: 30px 60px;
		overflow: hidden;
	}
	h1 {
		display: block;
		font-size: 35px;
		font-weight: 700;
		text-align: center;
	}
	button {
		padding: 20px 80px;
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

S.Divider = styled(motion.div)`
	width: 100%;
	height: 2px;
	background-color: #00FF94;;
	margin-bottom: 25px;
	&:last-child {
		margin-left: auto;
		margin-top: 30px;
	}
`;

S.Diffeculty = styled.div`
	width: 100%;
	.settings {
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 20px;
		font-weight: 700;
		font-size: 20px;
		cursor: pointer;
		.item {
			position: relative;
			text-shadow: 3px 3px 5px rgba(0,0,0, .5);
			padding: 0 20px;
			z-index: 2;
			transition: all .5s ease;
		}
	}
`;
S.Marker = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	height: 30px;
	width: 100px;
	background-color: ${props => props.difficulty.name === 'junior' ? '#00FF94' : props.difficulty.name === 'middle' ? '#FF7A2F' : '#EE3D48'};
	border-radius: 10px;
	transition: all 0.3s ease-in-out;
	z-index: 1;
`;