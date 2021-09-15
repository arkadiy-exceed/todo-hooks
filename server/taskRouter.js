const Router = require('express');
const router = new Router;
const contoller = require('./taskController.js');

router.post('/', contoller.postTask);
router.get('/', contoller.getTasks);
router.delete('/:id', contoller.deleteTask);
router.put('/:id', contoller.updateTask);

module.exports = router;