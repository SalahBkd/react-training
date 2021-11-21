const initialState = {
    posts: [
        {id: 1, title: 'title1', body: 'body body body 111111'},
        {id: 2, title: 'title2', body: 'body body body 222222'},
        {id: 3, title: 'title3', body: 'body body body 333333'}
    ]
}
const RootReducer = (state = initialState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });

        return {
            // we don't want to lose other state properties, so we keep them then we update the specified property
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default RootReducer;