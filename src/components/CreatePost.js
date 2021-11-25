import React from 'react';
import {connect} from "react-redux";
import {createPost} from "../store/actions/postActions";

class CreatePost extends React.Component {
    state = {
        id: "",
        title: "",
        body: "",
        error: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { createPost, loadPosts } = this.props;
        const myPost = {
            id: this.state.id,
            title: this.state.title,
            body: this.state.body,
        }
        createPost(myPost);
    };
    render() {
        return (
            <div>
                <h2>Add Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id">Post Id</label>
                    <input id="id" type="text" onChange={this.handleChange} />
                    <label htmlFor="title">Post Title</label>
                    <input id="title" type="text" onChange={this.handleChange} />
                    <label htmlFor="body">Post Body</label>
                    <input id="body" type="text" onChange={this.handleChange} />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);
