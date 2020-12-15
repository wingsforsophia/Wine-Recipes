const Wine = require('../models/wine')

module.exports = {
    new: newWine,
    create,
    index
}

function newWine(req, res) {
    res.render('wines/new', {
        title: "Add New Wine", 
        user: req.user
    })
}

function create (req, res) {
Wine.create(req.body)
.then(() => {
  res.redirect('/')
})
// .catch((err) => {
//     console.log(err)
//     })
}

function index (req, res) {
   Wine.find({})
    .then((wines) => {
        res.render('wines/index', {
            title: "Wines I've Tried",
            wines
        })
    }) 
   
    }