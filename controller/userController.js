const Users = require("../models/UserModel");

exports.Login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({ Username: username });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    if (user.Password !== password) {
      console.log("Incorrect password");
      return res.status(401).json({ message: "Incorrect password" });
    }

    console.log("Login success");
    console.log(req.body);
    res.status(200).json({ message: "Login success" });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


