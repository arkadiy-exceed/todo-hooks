const Router = require('express');
const router = new Router;
const contoller = require('./authController');

router.post('/registration', contoller.registration);
router.post('/login', contoller.login);
router.get('/', contoller.getUsers);


module.exports = router;