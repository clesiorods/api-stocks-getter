const express = require('express');
const router = express.Router();


const stocksController = require('../controllers/stocks');


router.get('/:code', (request, response) => {
    stocksController.getStock(request, response);
});

// router.post('/', (request, response) => {
//     stocksController.create(request, response);
// })

// router.put('/:id', (request, response) => {
//     stocksController.update(request, response);
// })

// router.delete('/:id', (request, response) => {
//     stocksController.delete(request, response);
// })


module.exports = router;