module.exports = {
    isAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', "Please login");
        res.redirect('/xyz/a/l');
    }
}