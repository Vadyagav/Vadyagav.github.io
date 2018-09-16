import config from './config.json';

const mapUser = (user) => ({
    name: user.name,
    login: user.login,
    logo: user.avatar_url,
    company: user.company,
    location: user.location,
    bio: user.bio,
    repositories: user.public_repos,
    following: user.following,
    followers: user.followers
});

export const updateUserView =  data => ({ user }) => ({
    user: { ...user, ...data }
});

export const updateUser = (data) => (
    fetch(`${config.baseUrl}/user`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${atob(config.token)}`, //token was decoded with btoa function
        },
        body: JSON.stringify(data)
    })
);


export const fetchUser = () => (
    fetch(`${config.baseUrl}/users/VladyslavHavrylov`)
    .then(response => response.json())
    .then(mapUser)
);