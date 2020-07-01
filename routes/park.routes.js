const express = require('express')
const router = express.Router()

const Park = require('./../models/park.model')
const Coaster = require('./../models/coaster.model')


// Aquí los endpoints

router.get('/new', (req, res) => {
    res.render ('parks/new-park')
})

router.post('/new', (req, res) => {
    const{name, description} = req.body
        //console.log(req.body)

    Park
    .create({name, description})
    .then(() => res.render('parks/new-park'))
    .catch(err => console.log('Error en DB', err))   

}) 

module.exports = router