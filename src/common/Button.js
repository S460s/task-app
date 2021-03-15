import styled from 'styled-components';
const Button = styled.button`
	color: ${({ theme, primary, color }) => (primary ? 'white' : theme[color])};
	background-color: ${({ theme, primary, color }) =>
		primary ? theme[color] : 'white'};
	border: solid 2px ${({ theme, color }) => theme[color]};
	font-size: 1em;
	padding: 0.25em 1em;
	display: inline-block;
	min-width: 5vw;
`;

export default Button;
