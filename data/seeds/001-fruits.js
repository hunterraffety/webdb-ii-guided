exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits')
    .truncate() // resets the primary key back to 1
    .then(function() {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'mango', delicious: true, color: 'yellow' },
        { name: 'red apple', delicious: true, color: 'red' },
        { name: 'green apple', delicious: true, color: 'green' },
        { name: 'strawberry', delicious: true, color: 'red' }
      ]);
    });
};

// npx knex seed:make 001-whatever
// npx knex seed:run
