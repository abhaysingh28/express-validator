var express = require('express');
var router = express.Router();
const { check } = require('express-validator');

const { homepage, createuser, signup } = require('../controllers/indexController');

router.get('/', homepage);

router.post('/createUser', createuser);


router.post('/signup',
    [
        check('name', 'name is required').isLength({
            min: 4,
        }),

        check('age', 'age is required').isLength({
            min: 1,
        }),

    ], signup);




module.exports = router;