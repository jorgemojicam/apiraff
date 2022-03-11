module.exports = app => {
  const auth = require("./auth.routes");
  const user = require("./user.routes");
  const carton = require("./carton.routes");

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });  
  
  app.use(`/api/v1/auth`, auth);
  app.use(`/api/v1/user`, user);
  app.use(`/api/v1/carton`, carton);
};
