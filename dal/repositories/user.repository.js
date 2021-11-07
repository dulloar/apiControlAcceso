const BaseRepository = require("./base.repository");

class UserRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "User");
  }
}

module.exports = UserRepository;
