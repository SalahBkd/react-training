import React from 'react';
import axios from "axios";

class Post extends React.Component {
    state = {
        post: {}
    }

    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                this.setState({
                    post: res.data
                })
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.post.body}
            </div>
        );
    }
}

export default Post;
