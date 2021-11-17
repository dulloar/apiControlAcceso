const mapper = require("automapper-js");
const {UserDto} = require("../dtos");

class UserController{

    constructor({UserService}){
        this._userService = UserService;
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async getUsers(req,res){
        let users = await this._userService.getAll();
        users = users.map(users => mapper(UserDto, users));
        return res.json(
            users
        );
    }

    async getUser(req,res){
        const { id } = req.params; 
        let user = await this._userService.get(id);
        user = mapper(UserDto, user);
        return res.send({
            payload: user
        });
    }

    async createUser(req, res){
        const { body } = req;
        const createUser = await this._userService.create(body);
        const user = mapper(UserDto,createUser);
        return res.status(201).send({
            payload: user    
        });
    }

    async updateUser(req, res){
        const { body } = req;
        const { id } = req.params;
        await this._userService.update(id,body);
        return res.status(204).send();
    }

    async deleteUser(req, res){
        const { id } = req.params; 
        await this._userService.delete(id);
        return res.status(204).send();
    }
}

module.exports = UserController;