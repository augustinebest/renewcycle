const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const upload = require('../Factories/image_uploads');
const { isAuthenticated } = require('../Config/Auth');

router.post('/login', adminController.login);
router.get('/logout', adminController.logout);
router.post('/register', adminController.register);
router.get('/dashboard', isAuthenticated, adminController.dashboard);
router.post('/gallery/add',  upload.upload.single('photo'), adminController.addPhotos);
router.get('/gallery/allphotos', adminController.getAllPhotos);
router.get('/getsubscribers', adminController.getSubscribers);
router.post('/notifysubscribers', adminController.notifySubscribers);

module.exports = router;