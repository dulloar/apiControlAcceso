const BaseBusiness = require("./base.bussines");
const Employee = require("./models/employee");

class EmployeeBussines extends BaseBusiness {

    constructor({EmployeeRepository}){
        super(EmployeeRepository,Employee);
    }
    
}

module.exports = EmployeeBussines;