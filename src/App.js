import './App.css';
import {Component} from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

class App extends Component {
    state = {
        todos: [
            { id: 1, content: "finish tutorial" },
            { id: 2, content: "play football" },
            { id: 3, content: "watch tvshow" },
        ],
    };

    addTodo = (todo) => {
        const todos = [...this.state.todos, todo];
        this.setState({ todos });
    }

    handleDelete = (todoId) => {
        const todos = this.state.todos.filter(todo => todo.id !== todoId);
        this.setState({todos});
    }

    render() {
        return (
            <div className="App">
                <h1>To-do App</h1>
                <TodoList todos={this.state.todos} onDelete={this.handleDelete}/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default App;
