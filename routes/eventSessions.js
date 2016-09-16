var express = require('express');
var router = express.Router();
var eventSessionHandler = require('../handlers/eventSessions');

router.get('/:id', eventSessionHandler.getOne);

router.get('/', eventSessionHandler.getAll);

router.post('/', eventSessionHandler.add);

router.put('/', eventSessionHandler.update);

router.delete('/', eventSessionHandler.remove);

module.exports = router;