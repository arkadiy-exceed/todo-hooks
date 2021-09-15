const Router = require('express');
const router = new Router;
const contoller = require('./authController');

router.post('/', contoller.registration);
router.post('/', contoller.login);
router.get('/', contoller.getUsers);


module.exports = router;