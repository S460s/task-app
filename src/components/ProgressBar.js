import React from 'react';
import styled from 'styled-components';
const StyledBar = styled.div`
	width: ${({ width }) => width}%;
	height: 100%;
	background-color: ${({ theme }) => theme.primary};
	transition: width 1s ease;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: absolute;
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
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CompleteNum = styled.span`
	color: ${({ theme }) => theme.dark};
	position: absolute;
	z-index: 2;
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
			<CompleteNum>{Math.floor(percent)}%</CompleteNum>
			<StyledBar width={percent}></StyledBar>
		</BarWrap>
	);
};

export default ProgressBar;
