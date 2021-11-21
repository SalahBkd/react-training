import './App.css';
import {connect} from "react-redux";
import {Component} from "react";
import {deletePost} from "./actions/PostActions";

class App extends Component {
    handleClick = (id) => {
        this.props.deletePost(id);
    }
    render() {
        // redux-store state is mapped to props of this component because we are subscribing to it
        // here we access the state in the props object
        console.log(this.props);
        const { posts } = this.props;
        return (
            <div>
                {posts.map(post => {
                    return (
                        <div key={post.id} className="post-card">
                            {post.id}
                            {post.title}
                            {post.body}
                            <button className="btn" onClick={() => this.handleClick(post.id)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

// subscribing to redux-store state
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

// mapping redux-actions to props so that we can call them within our components
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

// connect is a function that return a higher-order-component
export default connect(mapStateToProps, mapDispatchToProps)(App);
