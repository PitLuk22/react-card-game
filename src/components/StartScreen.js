import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, rightToLeft, leftToRight, topToBottom, bottomToTop, leftToRightOpacity, widthLeftToRight, widthRightToLeft } from '../animations';

const StartScreen = ({ handleStart, difficulty, setDiffeculty }) => {

	const marker = useRef(null);

	useEffect(() => {
		const btn = document.querySelector('.difficulty__item.active');
		marker.current.style.width = btn.offsetWidth + "px";
		marker.current.style.left = btn.offsetLeft + "px";
	}, [difficulty])

	const setActiveTab = (type) => difficulty.name === type ? 'difficulty__item active' : 'difficulty__item';

	return (
		<S.StartScreen variants={fadeIn} initial='hidden' animate='show' exit='exit' className='difficulty'>
			<div className='difficulty__wrapper'>
				<motion.h1 variants={topToBottom}>Welcome to<br /> Pit's gorgeous game!</motion.h1>
				<br />
				<motion.div variants={widthLeftToRight} className='difficulty__divider difficulty__divider-top'></motion.div>
				<S.Diffeculty>
					<motion.span variants={bottomToTop}>Choose your grade: </motion.span>
					<div className='difficulty__settings'>
						<motion.div
							variants={leftToRight}
							className={setActiveTab('junior')}
							onClick={() => setDiffeculty('junior')}>Junior</motion.div>
						<motion.div
							variants={fadeIn}
							className={setActiveTab('middle')}
							onClick={() => setDiffeculty('middle')}>Middle</motion.div>
						<motion.div
							variants={rightToLeft}
							className={setActiveTab('senior')}
							onClick={() => setDiffeculty('senior')}>Senior</motion.div>
						<S.Marker variants={leftToRightOpacity} ref={marker} difficulty={difficulty} id="marker" />
					</div>
				</S.Diffeculty>
				<motion.div variants={widthRightToLeft} className='difficulty__divider difficulty__divider-bottom'></motion.div>
				<motion.button variants={bottomToTop} onClick={handleStart}>Let's start</motion.button>
			</div>
		</S.StartScreen>
	)
}

export default StartScreen;

const S = {};
S.StartScreen = styled(motion.section)`
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
	.difficulty__wrapper {
		width: 100%;
		padding: 0 60px;
		overflow: hidden;
	}
	h1 {
		display: block;
		font-size: 35px;
		font-weight: 700;
		text-align: center;
	}
	button {
		margin: 40px;
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
	.difficulty__divider {
		width: 100%;
		height: 2px;
		background-color: #00FF94;;
		&-bottom {
			margin-left: auto;
		}
	}
`;

S.Diffeculty = styled.div`
	width: 100%;
	margin: 20px 0 30px 0;
	.difficulty__settings {
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 20px;
		font-weight: 700;
		font-size: 20px;
		cursor: pointer;
		.difficulty__item {
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
	transition: all 0.5s ease-in-out;
	z-index: 1;
`;