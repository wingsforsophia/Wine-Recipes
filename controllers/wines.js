const Wine = require('../models/wine')

module.exports = {
    new: newWine
}

function newWine(req, res) {
    res.render('wines/new', {
        title: "Add New Wine", 
        user: req.user
    })
}