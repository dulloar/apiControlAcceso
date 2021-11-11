const BaseRepository = require("./base.repository");

/**
 * 
 */
class EmployeeRepository extends BaseRepository{
    constructor({db}){
        super(db,"Employee");

    }
}

module.exports = EmployeeRepository;