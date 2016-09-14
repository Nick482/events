var express = require('express');
var router = express.Router();
var sessionHandler = require('../handlers/sessions');

router.get('/:id', sessionHandler.getOne);

router.get('/', sessionHandler.getAll);

router.post('/', sessionHandler.add);

router.put('/', sessionHandler.update);

router.delete('/', sessionHandler.remove);

module.exports = router;