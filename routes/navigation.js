const express = require('express')
const router = express.Router()
const { isAuthenticated } = require('../Config/Auth');
 
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
    res.render('pages/login')
})

router.get('/signup', (req, res) => {
    res.render('pages/signup')
})
 
router.get('/team', (req, res) => {
    res.render('pages/team')
})

router.get('/gallery', (req, res) => {
    res.render('pages/gallery')
})

router.get('/howwework', (req, res) => {
    res.render('pages/howwework')
})

router.get('/about', (req, res) => {
    res.render('pages/about')
})

router.get('/xyz/a/l', (req, res) => {
    res.render('admin/adminLogin')
})

router.get('/xyz/a/r', (req, res) => {
    res.render('admin/adminRegister')
})

router.get('/xyz/a/gallery', (req, res) => {
    res.render('admin/gallery')
})

// Redirects
router.get('/admin/register', (req, res) => {
    res.redirect('/xyz/a/r')
})
router.get('/admin/login', (req, res) => {
    res.redirect('/xyz/a/l')
})

router.get('/admin/dashboard/all-photos', isAuthenticated, (req, res) => {
    res.render('admin/dashboard', {
        username: req.user.username
    })
})

router.get('/admin/dashboard/add-photos', isAuthenticated, (req, res) => {
    res.render('admin/dashboard/addPhotos', {
        username: req.user.username
    })
})

router.get('/admin/dashboard/all-subscribers', isAuthenticated, (req, res) => {
    res.render('admin/dashboard/allSubscribers', {
        username: req.user.username
    })
})

router.get('/admin/dashboard/notify-subscribers', isAuthenticated, (req, res) => {
    res.render('admin/dashboard/notifySubscribers', {
        username: req.user.username
    })
})

module.exports = router;