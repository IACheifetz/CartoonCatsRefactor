const pool = require('../utils/pool');
module.exports = class CartoonCat {
  id;
  name;
  type;
  url;
  year;
  lives;
  issidekick;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.url = row.url;
    this.year = row.year;
    this.lives = row.lives;
    this.issidekick = row.issidekick;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM cartoon_cats;');
    return rows.map((row) => new CartoonCat(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cartoon_cats WHERE id=$1;', [id]);
    if(!rows[0]) return null;

    return new CartoonCat(rows[0]);
  }   
};
