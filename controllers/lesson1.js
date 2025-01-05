const adminRoute = (req, res) => {
  res.send("admin route");
};

const ezeRoute = (req, res) => {
  res.send("Ezequiel Rindello");
};


module.exports ={
  adminRoute,
  ezeRoute
}