exports.render = function (req, res) {
    res.render('role', {
        role: req.role,
    });
};

exports.getRole = function (req, res, next, role) {
    req.role = role;
    next();
};