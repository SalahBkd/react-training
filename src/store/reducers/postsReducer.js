const initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        case 'ADD_POST':
            let newPosts = [];
            state.posts.forEach(item => newPosts.push(item));
            newPosts.push(action.post);
            return {
                ...state,
                posts: newPosts
            }
        default:
            return state;
    }
}

export default postsReducer;