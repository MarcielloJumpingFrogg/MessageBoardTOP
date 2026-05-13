const express = require("express");
const app = express();
const path = require("node:path");
app.use(express.urlencoded({ extended: true }));

//routers
const HomepageRouter = require("./routes/HomePage");
const newPostRouter = require("./routes/newPost");
//end routers

//public folder
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
//end public folder

app.set("view engine", "ejs");
app.listen(3000);

//messages:
const messages = [
  { name: "Chris", text: "Hallo There", time: new Date() },
  { name: "John", text: "No you", time: new Date() },
];

//start of the app
app.use(
  "/",
  function (req, res, next) {
    req.title = "HomePage";
    req.messages = messages;
    next();
  },
  HomepageRouter,
);

app.use(function (req, res, next) {
  req.title = "New Post";
  req.messages = messages;
  next();
}, newPostRouter);
