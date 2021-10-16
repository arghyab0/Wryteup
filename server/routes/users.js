//imports
const router = require("express").Router();
const bcrypt = require("bcrypt");

//model
const User = require("../models/User");
const Article = require("../models/Article");

//get user details
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...rest } = user;
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update user route
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(400).json("You can update only your account");
  }
});

//delete user route
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      //first delete all posts by user
      const user = await User.findById(req.params.id);

      if (user) {
        await Article.deleteMany({ username: user.username });
      } else {
        res.status(404).json("User not found");
      }

      //now delete user
      await User.findByIdAndDelete(req.params.id);

      res.status(200).json("User has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(400).json("You can delete only your account");
  }
});

module.exports = router;
