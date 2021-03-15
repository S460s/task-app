import React, { useState } from 'react';
import uniqid from 'uniqid';
import Task from './components/Task';
import styled, { ThemeProvider } from 'styled-components';
import Button from './common/Button';
import theme from './common/theme';
import ProgressBar from './components/ProgressBar';

const Title = styled.h1`
	color: hsl(0, 0%, 4%);
	text-align: center;
`;

const SubTitle = styled(Title)`
	font-size: 20px;
	color: ${theme['dark']};
`;

const Form = styled.form`
	margin: auto;
	width: 80%;
	max-width: 900px;
	display: flex;
	justify-content: center;
`;

const Input = styled.input`
	display: inline-block;
	margin: auto;
	width: 100%;
	height: 35px;
	font-size: 20px;
	box-sizing: border-box;
	border-color: none;
	border: solid 3px ${theme['primary']};
	outline: none;
`;

const TaskContainer = styled.div`
	margin: auto;
	margin-top: 30px;
	display: flex;
	flex-direction: column;
`;

const App = () => {
	const [taskName, setTaskName] = useState('');
	const [tasks, setTasks] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setTasks((prevTasks) => {
			return [...prevTasks, { name: taskName, id: uniqid(), isDone: false }];
		});
		setTaskName('');
	};

	const deleteTask = (id) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	};

	const complete = (id) => {
		setTasks((prevTasks) => {
			const newTasks = prevTasks.map((task) => {
				const newTask = { ...task };
				if (newTask.id === id) {
					newTask.isDone = !newTask.isDone;
				}
				return newTask;
			});
			return newTasks;
		});
	};

	const taskComponents = tasks.map((task) => (
		<Task
			task={task}
			complete={complete}
			key={task.id}
			deleteTask={deleteTask}
		/>
	));

	return (
		<ThemeProvider theme={theme}>
			<Title>Task App</Title>
			<SubTitle>
				Built with{' '}
				<SubTitle as='a' href='https://reactjs.org/'>
					React
				</SubTitle>{' '}
				and{' '}
				<SubTitle as='a' href='https://styled-components.com/docs/'>
					Styled-Components
				</SubTitle>
			</SubTitle>
			<SubTitle>Progress Bar</SubTitle>
			<ProgressBar tasks={tasks} />

			<Form onSubmit={handleSubmit}>
				<Input
					required
					value={taskName}
					type='text'
					placeholder='Task name'
					onChange={(e) => setTaskName(e.target.value)}
				/>
				<Button primary color='primary'>
					Add
				</Button>
			</Form>

			<TaskContainer>{taskComponents}</TaskContainer>
		</ThemeProvider>
	);
};

export default App;
