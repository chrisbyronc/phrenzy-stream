const express = require('express');
const fs = require('fs');
const streamController = require('../controllers/streamController');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        // console.log(__filename, __dirname);
        const rstream = fs.createReadStream(__dirname + '/S2_1_Mikes_Song.mp3');
			rstream.pipe(res);
    });


module.exports = router;