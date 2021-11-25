import React from 'react';
import {getPosts} from "../store/actions/postActions";
import {connect} from "react-redux";

class Posts extends React.Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const postsList = this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            )
        });
        return (
            <div>
                <h2>Posts !!</h2>
                {postsList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {posts: state.post.posts}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
