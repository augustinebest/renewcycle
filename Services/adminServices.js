const jwt = require('jsonwebtoken');
const galleryRepository = require('../Repositories/galleryRepository');
const adminRepository = require('../Repositories/adminRepository');
const bcrypt = require('bcryptjs');

exports.register = (req, res, errors, data) => {
    const username = data.username; const password = data.password;
    adminRepository.getAdmin(data.username, (err, admin) => {
        if(err)  {
            errors.push({message: 'Error ocurred in finding this Admin'})
            res.render('admin/adminRegister', {
                errors,
                username,
                password
            })
        }
        if(admin) {
            errors.push({message: 'Admin already exists'})
            res.render('admin/adminRegister', {
                errors,
                username,
                password
            })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                const admin = {
                    username,
                    password: hash
                }
                adminRepository.add(admin, (err, ad) => {
                    req.flash('success_msg', 'You are registered')
                    res.redirect('/xyz/a/l')
                })
            })
        }
    })
}

exports.login = (req, res, data) => {
    req.flash('success_msg', 'You have logged in successfully!');
    res.redirect('/xyz/a/dashboard')
}

exports.addPhotos = (req, res, data) => {
    galleryRepository.add(data, (err, result) => {
        if(err) res.json({message: 'Error ocurred in adding this photo', code: 13});
        if(result) {
            return res.json({message: 'Photo added successfully!', code: 200});
        }
    })
}