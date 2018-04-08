exports.render = function (req, res) {
    res.render('join', {
        title: 'MEAN MVC',
        // user: JSON.stringify(req.user)
    });
}