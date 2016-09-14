var express = require('express');
var router = express.Router();
var userHandler = require('../handlers/users');

/* GET users listing. */
router.get('/', userHandler.getAll);

router.get('/:id', userHandler.getOne);

router.post('/', userHandler.add);

router.put('/', userHandler.update);

router.delete('/', userHandler.remove);


module.exports = router;