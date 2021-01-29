
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Syllabus = require('../../models/Syllabus');
const { check, validationResult } = require('express-validator/check');
global.atob = require("atob");

let tokenData;
const parseJwt = (passtoken) => {
    try {
        console.log(passtoken, "token re");
        let parsed = JSON.parse(atob(passtoken.split('.')[1]));
        console.log(parsed, "parsed")
        return parsed
    } catch (e) {
        console.log(e)
        console.log("parser failed")
        return null;
    }
};
router.post('/', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { token } = req.body;
    console.log(token)
    // if (token === undefined) {
    //     console.log(token, "token not recieved")
    //     return res.status(400).json({ errors: errors.array() });
    // }
    tokenData = parseJwt(token).user.id
    console.log(typeof (tokenData))
    try {
        console.log(tokenData)
        const subjects = await Syllabus.findOne({ user_id: tokenData })
        console.log(subjects)
        res.json(subjects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');

    }
});


module.exports = router;
