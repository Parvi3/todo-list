import { useState } from "react";
import TodoForm from "../TodoForm";
import ListTodo from "../ListTodo";
import './app.scss';
import Header from "../Header";

function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		setTodos([...todos, todo]);
	}

	const delTodo = (todo) => {
		setTodos(todos.filter(todos => todos !== todo));
	}

	return (
		<>
			<Header />
			<TodoForm addTodo={addTodo} />
			{todos.map((task, i) => <ListTodo id={i} todo={task} key={i} delTodo={delTodo} />)}
		</>
	);
}

export default App;
