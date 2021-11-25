import React, {Component} from 'react';
import {fetchUsers} from "../redux";
import {connect} from "react-redux";

class UserContainer extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const {userData} = this.props;
        return userData.loading ? (
            <h2>Loading...</h2>
        ) : userData.error ? (
            <h2>{userData.error}</h2>
        ) : (
            <div>
                {userData && userData.users && userData.users.map(user => <p key={user.id}>{user.name}</p>)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);