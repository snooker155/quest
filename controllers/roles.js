exports.render = function (req, res) {
    res.render('role', {
        role: req.role,
        mainTaskHeader: "Test",
        mainTaskDescription: "test test test",

        subTaskOneHeader: "Test",
        subTaskOneDescription: "test test test",

        subTaskTwoHeader: "Test",
        subTaskTwoDescription: "test test test",
    });
};

exports.getRole = function (req, res, next, role) {
    req.role = role;
    next();
};

exports.checkMainAnswer = function(req, res) {
    if(req.body.answer === "123"){
        res.json("Right answer");
    }else{
        res.json("Wrong answer");
    }
};

exports.checkSubOneAnswer = function(req, res) {
    if(req.body.answer === "123"){
        res.json("Right answer");
    }else{
        res.json("Wrong answer");
    }
};

exports.checkSubTwoAnswer = function(req, res) {
    if(req.body.answer === "123"){
        res.json("Right answer");
    }else{
        res.json("Wrong answer");
    }
};