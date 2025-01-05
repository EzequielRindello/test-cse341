// import the package
const express = require("express");
// create an app with build in functions like get, listed , put, etc.
const app = express();
// create a variable for port
const port = 4;

app.use("/", require("./routes"));

// listen:
app.listen(process.env.PORT || port, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || port));
});
