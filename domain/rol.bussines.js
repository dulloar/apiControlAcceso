const BaseBusiness = require("./base.bussines");
const User = require("./models/user");

class RolBussines extends BaseBusiness {

    constructor({UserRepository}){
        super(UserRepository,User);
    }
    
}