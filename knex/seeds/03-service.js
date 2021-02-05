
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('service').del()
    .then(function () {
      // Inserts seed entries
      return knex('service').insert([
        { car_id: 3340, name: "John"},
        { car_id: 3342, name: "James"},
        { car_id: 3346, name: "Juan"},
      ]);
    });
};
