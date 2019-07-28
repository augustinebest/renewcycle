const service = require('../Services/adminServices');
const validate = require('../Factories/Validate');
const passport = require('passport');
const cloud = require('../Factories/cloudinary');

exports.register = async (req, res) => {
    const payload = {
        username: req.body.username,
        password: req.body.password
    }
   try {
       let errors = [];
       const validateUsername = await validate('username', payload.username);
       const validatePassword = await validate('password', payload.password);
       const username = payload.username;
       const password = payload.password;
       if(validateUsername == false) {
           errors.push({message: 'Username Alphanumeric at least 3 characters'})
       } else if(validatePassword == false) {
            errors.push({message: 'Password Alphanumeric at least 6 characters'})
       }
       if(errors.length > 0) {
           res.render('admin/adminRegister', {
               errors,     
               username,
               password
           })
       } else {
            return service.register(req, res, errors, payload);
            // console.log('Pass')
       }
   } catch(error) {
        return res.json({message: error, code: 11})
    }
}

exports.login = (req, res, next) => {
   try {
       passport.authenticate('local', {
           successRedirect: '/admin/dashboard',
           failureRedirect: '/xyz/a/l',
           failureFlash: true
       })(req, res, next)
   } catch(error) {
        return res.json({message: error, code: 11})
    }
}

exports.logout = (req, res) => {
    try {
        req.logout();
        req.flash('success_msg', 'Logged out successfully');
        res.redirect('/xyz/a/l')
    } catch(error) {
        return res.json({message: error, code: 11})
    }
}

exports.dashboard = (req, res) => {
    res.render('admin/dashboard', {
        username: req.user.username
    })
}

exports.addPhotos = async (req, res) => {
    const payload = {
        photo: req.file.path,
        instagramLink: req.body.instagramLink,
        imageID: ''
    }
    try {
        const validateURL = await validate('url', payload.instagramLink);
        if(validateURL == true) {
            cloud.upload(req.file.path)
            .then(result => {
                payload.photo = result.url
                payload.imageID = result.Id
                return service.addPhotos(req, res, payload);
            })
        } else {
            return res.json({message: 'Invalid URL format!', code: 10})
        }
    } catch(error) {
        return res.json({message: error, code: 11})
    }
}

exports.getAllPhotos = (req, res) => {
    try {
        service.getAllPhotos(req, res)
    } catch(error) {
        return res.json({message: error, code: 11})
    }
}

exports.loadmore = (req, res) => {
    try {
        service.loadmore(req, res);
        // console.log('You want to load more')
    } catch(error) {
        return res.json({message: error, code: 11})
    }
}