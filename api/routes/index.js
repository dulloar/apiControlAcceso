const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const { SWAGGER_PATH } = require("../../config/environments");
const swaggerDocument = require(SWAGGER_PATH);
const { CacheMiddleware, ErrorMiddleware } = require("../middlewares");

module.exports = function ({
  UserRoutes,
  EmployeeRoutes,
  AuthRoutes
}) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
    .use(helmet())
    .use(morgan("dev"));
  apiRoute.use("/users", UserRoutes);
  apiRoute.use("/employee", EmployeeRoutes);
 

  router.use("/v1/api-dmg", apiRoute);
  router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  router.use(ErrorMiddleware);
  return router;
};
