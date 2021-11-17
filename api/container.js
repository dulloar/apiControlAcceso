const { asClass, createContainer, asFunction, asValue } = require("awilix");

//appStart
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

//routes
const Routes = require("./routes/index");
const {
  AuthRoutes,
  EmployeeRoutes,
  UserRoutes
} = require("./routes/index.routes");

//bussiness
const {
  EmployeeBussines,
  RolBussines,
  UserBussines
} = require("./../domain");

//controllers
const {
  AuthController,
  EmployeeController,
  UserController
} = require("../api/controller");

//Servicios
const {
  UserService,
  AuthService,
  EmployeeService
} = require("../services");
const {
  EmployeeRepository,
  RolRepository,
  UserRepository
} = require("../dal/repositories");

//db
const db = require("../dal/models");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asClass(Routes).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    //Controller
    UserController: asClass(UserController).singleton(),
    EmployeeController: asClass(EmployeeController).singleton(),
    AuthController: asClass(AuthController).singleton()
  })
  .register({
    //Routes
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    EmployeeRoutes: asFunction(EmployeeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton()
  })
  .register({
    config: asValue(config),
  })
  .register({
    db: asValue(db),
  })
  .register({
   //Services
    AuthService: asClass(AuthService).singleton(),
    EmployeeService: asClass(EmployeeService).singleton(),
    UserService: asClass(UserService).singleton()
  })
  .register({
    //Repositories
    EmployeeRepository: asClass(EmployeeRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton()
  })
  .register({
    //Bussiness
    EmployeeBussines: asClass(EmployeeBussines).singleton(),
    UserBussines: asClass(UserBussines).singleton()
  });

module.exports = container;
