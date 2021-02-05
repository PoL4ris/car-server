
const express = require('express');

const Cars = require('./models')
const router = express.Router();

// Get all the cars
router.get('/', (req, res) => {
  Cars.getAll()
  .then(cars => {
    res.json(cars);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get cars' });
  });
});

// Get car by Id
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Cars.getById(id)
    .then(car => {
      res.json(car);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve car' });
    });
  });

// Insert in service table and update cars table 
  router.put('/:id/service', (req, res) => {
    const { id } = req.params;
    
    let carInfo = {
      estimate_date : req.body.estimate_date,
      status : req.body.status
    };
    let serviceInfo = {
      name : req.body.name,
      car_id : req.body.car_id
    };

    Cars.updateCar(id, carInfo)
    .then(() => {
      Cars.updateService(id, serviceInfo)
      res.status(200).json({ success: 'Info Updated!', info: serviceInfo });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Server error in car update', err });
    });
  }); 

module.exports = router;