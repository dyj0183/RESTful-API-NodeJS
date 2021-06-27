const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require('../data/dummy-data.json')

router.get('/fetchAll', (req, res, next) => {
    // res.json(dummyData);
    res.redirect('/');
});

router.post('/insert', (req, res, next) => {
    /************************************************
     * INSERT YOUR WEB ENDPOINT CODE HERE
     ************************************************/

    const name = req.body.name;

    // check for duplication
    dummyData.avengers.forEach(avenger => {
        if (avenger.name == name) {
            console.log("name duplication is not allowed.")
            // return res.status(422).json({message: "name duplication is not allowed."});
        }
    })
    
    const newName = {name: name}
    dummyData.avengers.push(newName);
    console.log("Inserted " + name + " successfully!");

    res.json({
        message: 'Post created successfully',
        data: dummyData
    })
});

router.get('/', (req, res, next) => {

    console.log(dummyData);

    res.render('week10', {
        title: 'Week 10 Assignment',
        data: dummyData
    });
});

module.exports = router;