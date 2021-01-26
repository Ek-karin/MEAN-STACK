// Require
const express = require('express')
const User = require('../model/user')

// Config
const router = express.Router()

// method
// router.get('/add', (req,res) => {
//     var user1 = new User({first_name: "John",last_name:"Aanat"});
//     user1.save((err) => {
//         if(err) {return res.status(406).send({status:"Cannot write to mongoDB."})}
//     })
//     return res.status(200).send({status:"Success"});
// })

router.post('/add', (req, res) => {
// console.log(req.body);
    new User(req.body).save((err) => {
        if(err) {return res.status(406).send({status: `Cannot write ${req.body} to mongoDB.`})}
    });
    return res.status(200).send({status:"Success"});
})

router.get('/findAll', (req, res) => {
    User.find().exec((err, users) => {
        if(err) {return res.status(406).send({status:"Cannot find users."})}
        return res.status(200).send({users:users})
    })
})

module.exports = router