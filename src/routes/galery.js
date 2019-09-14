const { Router } = require('express');

const path = require('path');
const { unlink } = require('fs-extra');
const router = Router();

// Models
const Image = require('../models/Image');

router.get('/galery', async (req, res) => {
    const images = await Image.find();
    res.render('galerys/all-galery', { images });
});

router.get('/galery/upload', (req, res) => {
    res.render('galerys/upload');
});

router.post('/galery/upload', async (req, res) => {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    await image.save();
    res.redirect('/galery');
});

router.get('/galery/image/:id', async (req, res) => {
    const { id } = req.params;
    const image = await Image.findById(id);
    res.render('galerys/profile', { image });
});

router.get('/galery/image/:id/delete', async (req, res) => {
    const { id } = req.params;
    const imageDeleted = await Image.findByIdAndDelete(id);
    await unlink(path.resolve('./src/public' + imageDeleted.path));
    res.redirect('/galery');
});

module.exports = router;