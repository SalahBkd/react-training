import './App.css';
import {Component} from "react";
import axios from "axios";

class App extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        // this returns a Promise, something that is gonna finish in the future, we intercept it with then()
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            });
    }

    render() {
        const postsList = this.state.posts.length ? (
            this.state.posts.map(post => {
                return (
                    <div key={post.id}>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                    </div>
                );
            })
        ) : (
            <div>No posts !!</div>
        );

        return (
          <div>
              {postsList}
          </div>
        );
    }
}

export default App;
