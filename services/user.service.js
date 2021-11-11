const BaseService = require("./base.service");
class UserService extends BaseService {
  constructor({ UserBussines }) {
    super(UserBussines);
  }
}

module.exports = UserService;
