const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require('../data/dummy-data.json')

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
    // res.redirect('/');
});

router.post('/insert', (req, res, next) => {
    /************************************************
     * INSERT YOUR WEB ENDPOINT CODE HERE
     ************************************************/

    const name = req.body.name;
    const age = req.body.age;

    const newAvenger = {
        name: name,
        age: age
    }

    // let array = dummyData.avengers;
    // console.log(array);

    // let hasDuplication;

    // array.forEach(avenger => {
    //     if (avenger.name !== name) {
    //         hasDuplication = false;
    //         console.log("No duplication!")
    //     } else {
    //         hasDuplication = true;
    //         console.log("There is a duplicated name.");
    //     }
    // })

    // if (!hasDuplication) {
    //     dummyData.avengers.push(newAvenger);

    //     console.log("Inserted " + name + " successfully!");

    //     res.json({
    //         message: 'Post created successfully',
    //         data: dummyData
    //     })
    // } else {
    //     console.log("There is a duplicated name.");
    // }

    // SOME Method

    let array = dummyData.avengers;
    console.log(array);

    // return true if there is any duplication
    function hasDuplication(array) {
        return array.some(avenger => avenger.name === name);
    }

    // if there is NO duplcation
    if (!hasDuplication(array)) {
        console.log("Inserted " + name + " successfully!");

        dummyData.avengers.push(newAvenger);

        res.json({
            message: 'Post created successfully',
            data: dummyData
        })
    } else {
        console.log("name duplication is not allowed.");
    }
})

router.get('/', (req, res, next) => {

    //console.log(dummyData);

    res.render('week10', {
        title: 'Week 10 Assignment',
        data: dummyData
    });
});

module.exports = router;