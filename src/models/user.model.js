export default class UserModel {

    constructor(id, userName, password, email) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.email = email;
    }

    static get() {
        return users;
    }

}

// Dummy Users
const users = [];