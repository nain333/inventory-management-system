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
  static isValidUser(email, password) {
    const result = users.find(
      (u) => u.email == email && u.password == password,
    );

    return result;
  }
}

// Dummy Users
const users = [];
