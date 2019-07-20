const jwt = require('jsonwebtoken');

exports.checkAuth = (req, res, next) => {
    try {
        const token = req.body.token || req.params.token || req.headers.token || req.headers.authorization.split(" ")[1];
        // console.log('from backend', token)
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // console.log('decoded',decoded);
        req.userData = decoded;
        next();
    } catch(error) {
        return res.json({
            message: 'Auth Failed!',
            code: 90
        })
    }
}