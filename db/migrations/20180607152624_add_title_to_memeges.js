
exports.up = (knex, Promise) => {
    return knex.schema.table('memeges', (table) => {
      table.string('title');
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.table('memeges', (table) => {
        table.dropColumn('title');
    });
  };