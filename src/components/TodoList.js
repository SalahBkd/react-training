import React, { Component } from "react";

class TodoList extends Component {
    todosList = () =>
        this.props.todos.length ? (
            this.props.todos.map((todo) => (
                <div className="todoItem">
                    <p className="onItemHover" key={todo.id} onClick={() => this.props.onDelete(todo.id)}>
                        {todo.content}
                    </p>
                </div>
            ))
        ) : (
            <p>you have no todos left</p>
        );

    render() {
        return <div>{this.todosList()}</div>;
    }
}

export default TodoList;
