const users = [];

function registerUser(username, password) {
    const user = { username, password };
    users.push(user);
    return { username: user.username };
}


module.exports = registerUser;