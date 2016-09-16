var express = require('express');
var router = express.Router();
var eventHandler = require('../handlers/events');

router.get('/top', eventHandler.getTop);

router.get('/closets', eventHandler.getClosest);

router.get('/latest', eventHandler.getLatest);

router.get('/:id', eventHandler.getOne);

router.get('/', eventHandler.getAll);

router.post('/', eventHandler.add);

router.put('/', eventHandler.update);

router.delete('/', eventHandler.remove);

module.exports = router;