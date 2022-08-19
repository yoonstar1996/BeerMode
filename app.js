const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use('/static', express.static('static'));
const port = 8000;

app.get("/", (req, res) => {
  res.render('main');
})

app.get("/main", (req, res) => {
  res.render('main');
})

app.get("/info", (req, res) => {
  res.render('inf2');
})

app.get("/main2", (req, res) => {
  res.render('main2');
})

app.get("/mypage", (req, res) => {
  res.render("mypage");
})

app.listen(port, () => {
  console.log("server open: ", port);
})