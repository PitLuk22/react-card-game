import React from 'react';
import styled from 'styled-components';

const Timer = ({ limit, attemptCounter, children }) => {

	const refineTime = (sec) => {
		let min = Math.floor((sec / 60) % 60);
		return `${min}:${addZero(sec % 60)}`
	}
	const addZero = (num) => {
		return num < 10 ? `0${num}` : num;
	}

	const definePercents = (sec) => {
		return (sec / limit) * 100
	}

	return (
		<S.Timer>
			<S.Limits>
				<span className='current-time'>{refineTime(children)}</span>
				<span className='attempts'>{attemptCounter}</span>
				<span className='end-time'>{refineTime(limit)}</span>
			</S.Limits>
			<S.Range percents={definePercents(children)} />
		</S.Timer>
	)
}

export default Timer;

const S = {};
S.Timer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	margin-bottom: 20px;
`;
S.Limits = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	font-size: 20px;
	font-weight: bold;
	color: #b3bbbd;
	letter-spacing: 2px;
	margin-bottom: 10px;
	.current-time {
		text-align: left;
	}
	.attempts {
		text-align: center;
		font-size: 25px;
		color: #fff;
	}
	.end-time {
		text-align: right;
	}
`;
S.Range = styled.div`
	position: relative;
	width: 100%;
	height: 10px;
	background-color: #1A2026;
	border-radius: 10px;
	overflow: hidden;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: inherit;
		border-radius: 10px;
		width: ${props => props.percents + '%'};
		background-color: ${props => {

		const progress = parseInt(props.percents);
		if (progress < 65) return '#00FF94';
		else if (progress >= 60 && progress < 85) return '#FF7A2F';
		else return '#EE3D48';

	}};
		transition: all .5s;
	}
`;