
exports.up = (knex, Promise) => {
    return knex.schema.createTable('memeges', (table) => {
      table.increments();
      table.string('url');
      table.string('tagString');
      table.integer('votes');
      table.timestamps(true, true);
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('memeges');
  };
  