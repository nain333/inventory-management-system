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
  static add(userObj) {
    const newUser = new UserModel(
      users.length + 1,
      userObj.userName,
      userObj.password,
      userObj.email,
    );
    users.push(newUser);
    console.log("user added successfuly");
    console.log(users);
  }
}

// Dummy Users
const users = [];
