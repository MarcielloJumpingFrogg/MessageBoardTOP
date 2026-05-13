const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("newPostForm", { title: req.title });
});

router.post("/new", (req, res) => {
  req.messages.push({
    name: req.body.name,
    text: req.body.text,
    time: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
