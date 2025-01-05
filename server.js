// import the package
const express = require("express");
// create an app with build in functions like get, listed , put, etc.
const app = express();
// create a variable for port
const port = 3000;

app.get("/", (req, res) => {
  res.send("Ezequiel Rindello");
});

app.listen(process.env.PORT || port, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || port));
});
