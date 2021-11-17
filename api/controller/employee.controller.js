const mapper = require("automapper-js");
const {EmployeeDto} = require("../dtos");

class EmployeeController{

    constructor({EmployeeService}){
        this._employeeService = EmployeeService;
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async getEmployees(req,res){
        let employees = await this._employeeService.getAll();
        employees = employees.map(employees => mapper(EmployeeDto, employees));
        return res.json(
            employees
        );
    }

    async getEmployee(req,res){
        const { id } = req.params; 
        let employee = await this._employeeService.get(id);
        employee = mapper(EmployeeDto, employee);
        return res.send({
            payload: employee
        });
    }

    async createEmployee(req, res){
        const { body } = req;
        const createEmployee = await this._employeeService.create(body);
        const employee = mapper(EmployeeDto,createEmployee);
        return res.status(201).send({
            payload: employee    
        });
    }

    async updateEmployee(req, res){
        const { body } = req;
        const { id } = req.params;
        await this._employeeService.update(id,body);
        return res.status(204).send();
    }

    async deleteEmployee(req, res){
        const { id } = req.params; 
        await this._employeeService.delete(id);
        return res.status(204).send();
    }
}

module.exports = EmployeeController;