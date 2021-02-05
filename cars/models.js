const db = require('../knex/db_config.js');

function getAll(){
    return db('cars')
}

function getById(id){
    return db('cars').where('cars.id', id).first();
}

function updateCar(id, change){
    return db('cars').where('cars.id', id).update(change)
 }

function updateService(id, change){
     db('service')
    .where('service.car_id', id)
    .first()
    .then(function(rows){
        if(rows)
            return db('service').where('service.car_id', id).update(change);
        else
            return db('service').insert(change);
    });
}
module.exports = {
    getAll, 
    getById,
    updateCar,
    updateService
}