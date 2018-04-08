exports.render = function (req, res) {
    res.render('host', {
        title: 'MEAN MVC',
        // user: JSON.stringify(req.user)
    });
}