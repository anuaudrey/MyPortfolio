var express = require('express');
var router = express.Router();

var projectsController = require('../controllers/projects');


router.post('/', projectsController.processAdd);

router.get('/:id', projectsController.getByID);
router.get('/', projectsController.projectsList);

router.put('/:id', projectsController.processEdit);

router.delete('/:id', projectsController.processDelete);

module.exports = router;