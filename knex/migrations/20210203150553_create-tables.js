exports.up = function(knex) {
    return knex.schema
    .createTable('cars', car =>{
        car.increments('id');
        car.string('description', 255);
        car.string('make', 128);
        car.string('model', 128);
        car.string('estimate_date');
        car.string('image');
        car.integer('km');
        car.string('status').notNullable();
    })
    .createTable('service', (service)=>{
        service.increments();
        service.string('name', 255);
        service
        .integer('car_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cars')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('cars')
  .dropTableIfExists('service')
};



