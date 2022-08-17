const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use( '/static', express.static( 'static'));
const port = 8000;

app.get("/", (req,res)=>{
  res.render('main');
})
app.get("/eventCalendar", (req,res)=>{
  res.render("eventCalendar");
})

app.listen(port, ()=>{
  console.log("server open: ", port);
})
