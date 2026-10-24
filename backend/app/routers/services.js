var express = require('express');
var router = express.Router();

var servicesController = require('../controllers/services');


router.post('/', servicesController.processAdd);

router.get('/:id', servicesController.getByID);
router.get('/', servicesController.servicesList);

router.put('/:id', servicesController.processEdit);

router.delete('/:id', servicesController.processDelete);

module.exports = router;