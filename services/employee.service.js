const BaseService = require("./base.service");
class EmployeeService extends BaseService {
  constructor({ EmployeeBussines }) {
    super(EmployeeBussines);
  }
}

module.exports = EmployeeService;
