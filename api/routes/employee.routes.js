const { Router } = require('express');
const { HeaderMiddleware } = require('../middlewares');


module.exports = function({ EmployeeController }){
    const router = Router();

    router.get("/",EmployeeController.getEmployees.bind(EmployeeController));
    router.get("/:id",EmployeeController.getEmployee.bind(EmployeeController));
    router.post("/",EmployeeController.createEmployee.bind(EmployeeController));
    router.put("/:id",EmployeeController.updateEmployee.bind(EmployeeController));
    router.delete("/:id",EmployeeController.deleteEmployee.bind(EmployeeController));

    return router;
}