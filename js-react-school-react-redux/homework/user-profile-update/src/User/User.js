import React from 'react';
import UserInfo from "./UserInfo";
import {fetchUser, updateUserView, updateUser} from './userHelper';
import UserForm from "./UserForm";


const MODE_VIEW = 'view';
const MODE_EDIT = 'edit';
const MODE_LOAD = 'load';

const isView = mode => (
    mode === MODE_VIEW
);

const isEdit = mode => (
    mode === MODE_EDIT
);

const isLoad = mode => (
    mode === MODE_LOAD
);


class User extends React.Component {
    state = {
        mode: MODE_LOAD,
        user: null
    };

    toggleView = () => this.setState(
        ({ mode }) => ({
            mode: mode === MODE_VIEW
                ? MODE_EDIT
                : MODE_VIEW
        })
    );

    handleUserChange = data => {
        this.setState(
            updateUserView(data)
        );
    };

    updateUserProfile = data => {
        updateUser(data);
        this.setState(
            updateUserView(data)
        );
    };

    loadUser() {
        fetchUser()
        .then(this.handleUserChange)
        .then(
            () => this.setState({
                mode: MODE_VIEW
            })
        )
    }

    componentDidMount() {
        this.loadUser();
    }

    render() {
        const { user, mode } = this.state;
        const handlers = {
            toggleView: this.toggleView,
            onChange: this.updateUserProfile,
        };

        return (
            isView(mode) ? <UserInfo {...user} {...handlers} /> :
                isEdit(mode) ? <UserForm {...user} {...handlers} /> :
                    isLoad(mode) ? 'Loading ...' :
                        null
        );
    }
}

export default User;
