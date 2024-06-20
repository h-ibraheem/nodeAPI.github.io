const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController')

router.get('/', itemController.index);

router.post('/create', itemController.create)

router.get('/details/:id', itemController.details);

router.put('/:id', itemController.update);

router.delete('/:id', itemController.del);

module.exports = router;