class BaseRepository {
    constructor(db, entity) {
      this._db = db;
      this.entity = entity;
    }
  
    async getAll() {
      return await this._db[this.entity].findAll({where: {}});
    }
  
    async get(id) {
      return await this._db[this.entity].findOne({ where: { id } });
    }
  
    async create(entity) {
      //entity.created_at = Date().now();
      return await this._db[this.entity].create(entity);
    }
  
    async update(id, entity) {
      entity.updated_at = Date().now();
      return await this._db[this.entity].update(entity, { where: { id } });
    }
  
    async delete(id) {
      return await this._db[this.entity].destroy({ where: { id } });
    }
  }
  
  module.exports = BaseRepository;
  