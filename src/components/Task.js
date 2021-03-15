import styled, { keyframes } from 'styled-components';
import Button from '../common/Button';

const fadeIn = keyframes`
	from{
		opacity: 0%;
		transform: scale(0.2) ;
	}
	to{
		opacity: 100%;
		transform: scale(1); 
	}
`;

const StyledTask = styled.div`
	width: 80%;
	max-width: 800px;
	border: 3px solid ${({ theme }) => theme.dark};
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: auto;
	margin-top: 30px;
	transition: transform 2s ease;
	&:hover {
		transform: scale(1.1);
	}
	animation: 2s linear ${fadeIn};
`;

const ButtonWrapper = styled.div`
	width: 35%;
	min-width: 150px;
	display: flex;
	justify-content: space-evenly;
`;

const TaskTitle = styled.p`
	color: hsl(0, 0%, 21%);
	font-size: 20px;
	text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
`;

const Task = ({ task: { name, id, isDone }, deleteTask, complete }) => {
	return (
		<StyledTask>
			<TaskTitle isDone={isDone}>{name}</TaskTitle>
			<ButtonWrapper>
				<Button primary color='danger' onClick={() => deleteTask(id)}>
					Delete
				</Button>
				<Button onClick={() => complete(id)} primary color='primary'>
					{isDone ? 'Undo' : 'Complete'}
				</Button>
			</ButtonWrapper>
		</StyledTask>
	);
};

export default Task;
