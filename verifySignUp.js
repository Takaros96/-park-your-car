const db = require("../models/index.js");
const User = db.user;

checkIfUsernameOrEmailExists = async (req, res, next) => {
  try {
    // Username
    let user = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (user) {
      return res.status(400).send({
        message: "Username is already in use"
      });
    }

    // Email
    user = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user) {
      return res.status(400).send({
        message: "Email is already in use"
      });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};

const verifySignUp = {
  checkIfUsernameOrEmailExists
};

module.exports = verifySignUp;
