const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require('../data/dummy-data.json')

router.get('/', (req, res, next) => {

    console.log(dummyData);

    res.render('week10', {
        title: 'Week 10 Assignment',
        path: '/teamActivities/10',
        data: dummyData
    });
});

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insert', (req, res, next) => {
    /************************************************
     * INSERT YOUR WEB ENDPOINT CODE HERE
     ************************************************/
    
    const name = req.body.name;
    const newName = {name: name}
    dummyData.avengers.push(newName);

    res.json({
        message: 'Post created successfully',
        post: {name: name}
    })
});

module.exports = router;