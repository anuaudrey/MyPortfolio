var express = require('express');
var router = express.Router();

var referencesController = require('../controllers/references');


router.post('/', referencesController.processAdd);

router.get('/:id', referencesController.getByID);
router.get('/', referencesController.referencesList);

router.put('/:id', referencesController.processEdit);

router.delete('/:id', referencesController.processDelete);

module.exports = router;