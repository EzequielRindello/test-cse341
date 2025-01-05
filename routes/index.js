// Initialize express router
const routes = require("express").Router();
// import anonymousn function
const lesson1Controller = require("../controllers/lesson1");

// get: if you get an HTTP request at "/" ----> run the code
routes.get("/", lesson1Controller.ezeRoute);

// get: if you get an HTTP request at "/admin" ----> run the code
routes.get("/admin", lesson1Controller.adminRoute);


module.exports = routes;