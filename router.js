const express = require('express');
const multer = require('multer');

const servise = require('../servise/servise');

const router = express.Router();


const upload = multer(
    {
        dest: 'uploads/'
    });


router.post('/upload', upload.single('xlFile'), async (req, res) => {
    try {

        const data = await servise.convert(req.file);

        res.status(200).send({
            massage: 'Data uploaded and saved successfully.',
            data
        });

    } catch (error) {

        console.error(error);

        res.status(500).send('Internal Server Error');

    }

});

module.exports = router;
