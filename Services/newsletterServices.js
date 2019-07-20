const newsletterRepository = require('../Repositories/newsletterRepository');
const mailer = require('../Factories/mailer');

exports.subscribe = (req, res, payload) => {
    newsletterRepository.get(payload.email, (err, result) => {
        if(err) return res.json({message: 'error ocurred in obtaining this email', code: 13});
        if(result) return res.json({message: 'Email already exist in our newsletter list', code: 15});
        else {
            newsletterRepository.add(payload, (err, output) => {
                if(err) return res.json({message: 'error ocurred in adding this email', code: 17});
                mailer.sendInfo(payload, (err2, info) => {
                    if(err2) return res.json({message: err2, code: 21});
                    return res.json({message: 'Email added successfully', code: 200});
                })
            })
        }
    })
}