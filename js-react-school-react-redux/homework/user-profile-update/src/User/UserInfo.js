import React from 'react';

const UserInfo = ({name, login, logo, company, location, bio, repositories, following, followers, toggleView}) => (
    <div>
        <img
            className="img-thumbnail"
            src={logo}
            alt={name}
        />
        <a onClick={toggleView}><h2>{name}</h2></a>
        <h5>{login}</h5>
        {company ? <div> {company} </div> : ''}
        {location ? <div> {location} </div> : ''}
        <br/>
        <strong>Bio:</strong>
        <div>{bio ? bio : 'no bio entered'}</div>
        <br/>
        <strong>Statistics:</strong>
        <div>Repositories: {repositories}</div>
        <div>following: {following} </div>
        <div>followers: {followers} </div>
    </div>

);

export default UserInfo;
