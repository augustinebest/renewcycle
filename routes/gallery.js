const express = require('express');
const router = express.Router();
const galleryController = require('../Controllers/galleryController');

router.post('/add', galleryController.add);
 
module.exports = router;