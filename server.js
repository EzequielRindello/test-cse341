// import the package
const express = require("express");
// create an app with build in functions like get, listed , put, etc.
const app = express();
// create a variable for port
const port = 3000;
// import anonymousn function
const lesson1Controller = require("./controllers/lesson1");

// get: if you get an HTTP request at "/" ----> run the code
app.get("/", lesson1Controller.ezeRoute);

// get: if you get an HTTP request at "/admin" ----> run the code
app.get("/admin", lesson1Controller.adminRoute);

// listen:
app.listen(process.env.PORT || port, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || port));
});
