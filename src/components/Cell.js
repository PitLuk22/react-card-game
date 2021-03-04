import React from 'react'
import styled from 'styled-components';
import question from '../img/question-mark.svg';

const Cell = ({ cell, handleClick }) => {

	const { name, image, status } = cell;

	return (
		<S.Cell
			onClick={status === 'opened' || status === 'active' ? null : () => handleClick(cell)}
			status={status}
			name={name}>
			<div className='front'>
				<img src={question} alt="question" />
			</div>
			<div className='back'>
				<img src={image} alt={name} />
			</div>
		</S.Cell>
	)
}

export default Cell

const S = {};
S.Cell = styled.div`
	position:relative;
	perspective: 1000px;
	cursor: pointer;
	.front, .back {
		position: absolute;
		width: 100%;
		height: 100%;
		top:0;
		left:0;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: transform .4s ease;
		backface-visibility: hidden;
		border-radius: 10px;
		box-shadow: 0 0 10px 5px rgba(0,0,0, .2);
		img {
			width: 100%;
			height: 100px; 
			color: #1A2026;
		}
	}
	.front {
		background-color: #1A2026;
		transform: ${props => props.status === 'opened' || props.status === 'active' ? `rotateY(180deg)` : 'rotateY(0)'};
		img {
			transform: rotateY(0);
		}
	}
	.back {
		background-color: #1A2026;
		transform: ${props => props.status === 'opened' || props.status === 'active' ? 'rotateY(360deg)' : 'rotateY(180deg)'};
		border: 2px solid  ${props => props.status === 'opened' ? '#B5FBDD' : 'transparent'};
		img {
			transform: rotateY(360deg);
		}
	}	
`;