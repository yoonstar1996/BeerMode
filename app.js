const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use( '/static', express.static( 'static'));
const port = 8000;

app.get("/", (req,res)=>{
  res.render('main');
})
app.get("/calendar", (req,res)=>{
  res.render("calendar1");
}) 

app.listen(port, ()=>{
  console.log("server open: ", port);
})
