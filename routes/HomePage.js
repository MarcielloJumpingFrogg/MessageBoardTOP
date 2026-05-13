const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("homepage", { title: req.title, messages: req.messages });
});

module.exports = router;
