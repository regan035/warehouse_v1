const User = require("../model/user");

const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  console.log("inside signup controller", typeof req.body);
  const { name, email, password } = req.body;
  //req.body = JSON.parse(req.body)
  // res.json({
  //     user:{name,email,password}
  // })
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      console.log(user);
      return res.status(400).json({
        error: "Email is Taken"
      });
    }

    const { name, email, password } = req.body;

    console.log(req.body);
    console.log({ name, email, password });
    let newUser = new User({ name, email, password });
    newUser.save((err, success) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: err
        });
      }
      res.json({
        user: success
      });
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);
  // check if user exist
  User.findOne({ email }).exec((err, user) => {
    console.log(user);
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please signup."
      });
    }
    // authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not match."
      });
    }
    // generate a token and send to client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    res.cookie("token", token, { expiresIn: "1d" });
    const { _id, name, email } = user;
    return res.json({
      token,
      user: { _id, name, email }
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  // res.json({
  //     message: 'Signout success'
  // });
  res.redirect("/");
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET
});
