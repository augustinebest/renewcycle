const service = require('../Services/newsletterServices');
const validate = require('../Factories/Validate');

exports.subscribe = async (req, res) => {
    try {
        const payload = {
            name: req.body.name,
            email: req.body.email
        }
        const validateEmail = await validate('email', payload.email);
        if(validateEmail == true) {
            return service.subscribe(req, res, payload);
        } else {
            return res.json({message: 'This email format is invalid', code: 19})
        }
    } catch(error) {
        return res.json({message: error, code: 11})
    }
}