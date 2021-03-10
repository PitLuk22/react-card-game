import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		font-family: 'Poppins', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.app {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding-top: 100px;
		background-color: #2F3640;
	}
`;
export default GlobalStyle;

