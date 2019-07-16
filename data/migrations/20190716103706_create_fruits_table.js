exports.up = function(knex) {
  // changes to db schema
  return knex.schema.createTable('fruits', tbl => {
    // add a primary key named id, integer, autoincrement
    tbl.increments();
    // other columns
    tbl
      .string('name', 128)
      .unique()
      .notNullable();
    tbl.decimal('averageWeightOz');
    tbl.boolean('delicious');
  });
};

exports.down = function(knex) {
  // undo changes to db schema
  return knex.schema.dropTableIfExists('fruits');
};

// npm knex init
// npm knex migrate:make create-fruits-table
// npm knex migrate:up

// npx knex migrate:down // undoes one migration at a time
