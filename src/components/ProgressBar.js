import React from 'react';
import styled from 'styled-components';
const StyledBar = styled.div`
	width: ${({ width }) => width}%;
	height: 100%;
	background-color: ${({ theme }) => theme.primary};
	transition: width 1s ease;
`;

const BarWrap = styled.div`
	width: 80%;
	max-width: 900px;
	height: 30px;
	display: block;
	margin: auto;
	margin-top: 30px;
	margin-bottom: 30px;
	border: 2px solid ${({ theme }) => theme.dark};
`;

const ProgressBar = ({ tasks }) => {
	let completed = 0;
	let total = tasks.length;
	tasks.forEach((task) => {
		if (task.isDone) {
			completed += 1;
		}
	});
	let percent = total ? (completed / total) * 100 : 0;

	return (
		<BarWrap>
			<StyledBar width={percent} />
		</BarWrap>
	);
};

export default ProgressBar;
