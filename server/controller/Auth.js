const { User } = require("../model/User");

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  const userExists = await User.findOne({ email: user.email });

  if (userExists) {
    res.status(400).json({ message: "User already exists" });
  } else {
    try {
      const doc = await user.save();
      // generateToken(res, user.id);
      res.status(201).json(doc);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPasswords(password))) {
      // generateToken(res, user.id);
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        addresses: user.addresses,
        orders: user.orders,
      });
    } else {
      res.status(400).json({ message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};
