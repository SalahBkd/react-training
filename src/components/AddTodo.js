import React, { Component } from "react";

class AddTodo extends Component {
    state = {
        todocontent: "",
        error: "",
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();

        const { todocontent } = this.state;
        const { addTodo } = this.props;

        const todo = { id: Math.random() * 4, content: todocontent };
        e.target.reset();
        addTodo(todo);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todocontent">Add Todo</label>
                    <br />
                    <input id="todocontent" type="text" onChange={this.handleChange} />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;
