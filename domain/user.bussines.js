const BaseBusiness = require("./base.bussines");
const User = require("./models/user");

class UserBussines extends BaseBusiness {

    constructor({UserRepository}){
        super(UserRepository,User);
    }
    
}

module.exports = UserBussines;