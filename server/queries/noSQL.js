const {
  Users,
  Posts,
  Comments,
  Reactions
} = require("../databases/nosql/models");

module.exports = {
  "/getUserById": id => {
    return Users.findById(id);
  },
  "/createUser": user => {
    const { username, avitar } = user;
    return Users.create({ username, avitar, timestamp: new Date().toString() });
  },
  "/deleteUserById": id => {
    return Users.findByIdAndDelete(id);
  },
  "/editUser": (id, updates) => {
    return Users.findOneAndUpdate({ _id: id }, updates, {
      new: true,
      useFindAndModify: false
    });
  }
};
