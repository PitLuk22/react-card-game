import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Button = ({ animVariant, size, children }) => {
	return (
		<S.Btn variants={animVariant} size={size}>{children}</S.Btn>
	)
}

export default Button
const S = {};
S.Btn = styled(motion.button)`
	padding: ${props => props.size === 'small' ? '20px 0' : '20px 80px'};
	width: ${props => props.width === 'small' ? '200px' : 'auto'}; 
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
	@media(max-width: 576px ) {
		width: 100%;
		padding: 15px 0;
		font-size: 22px;
	}
`;