const express = require('express')
const router = express.Router()

const Coaster = require('./../models/coaster.model')
const Park = require('./../models/park.model')

// Aquí los endpoints

router.get('/new', (req, res) => {
    Park
    .find()
    .then(allParks => {
    res.render('coasters/new-coaster', { allParks })
    })
    .catch(err => console.log("Error en DB", err))

})


module.exports = router