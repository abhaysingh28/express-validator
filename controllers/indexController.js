const { validationResult } = require('express-validator');
const userModel = require('../models/userSchema');

exports.homepage = function (req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
}

exports.signup = async (req, res) => {
    try {
        const errors = validationResult(req);
        console.log("lolo");
        if (!errors.isEmpty()) {
            return res.json({ errors: errors });

        }
        const { name, age } = req.body;
        const user = new userModel({ name, age });
        const createduserss = await user.save();
        res.status(201).json(createduserss);

    } catch (err) {
        res.json({ err });
    }

}

exports.createuser = (req, res) => {
    userModel.create({
        name: req.body.name,
        age: req.body.age
    }).then((user) => {
        res.json({ user });
    })
}
