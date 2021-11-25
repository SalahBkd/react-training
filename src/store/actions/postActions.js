import axios from "axios";

export const createPost = (post) => {
    return (dispatch, getState) => {
        // do some async work
        axios.post("http://localhost:3004/posts", post)
            .then(res => {
                let newPost = res.data;
                dispatch({ type: 'ADD_POST', post: newPost});
            }).catch(err => {
                console.log(err);
        });

    }
}

export const getPosts = () => {
    return (dispatch, getState) => {
        // do some async work
        axios.get("http://localhost:3004/posts")
            .then(res => {
                const posts = res.data;
                dispatch({ type: 'GET_POSTS', posts: posts});
            }).catch(err => {
            console.log(err);
        });

    }
}


