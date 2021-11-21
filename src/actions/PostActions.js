// For better separation of concerns we put actions in a single file
export const deletePost = (id) => {
    return  {
        type: 'DELETE_POST',
        id
    }
}