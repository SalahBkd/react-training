import React from 'react';
import Posts from "./Posts";
import CreatePost from "./CreatePost";


class Home extends React.Component {
    render() {
        return (
            <div>
                <Posts />
                <CreatePost />
            </div>
        );
    }
}

export default Home;
