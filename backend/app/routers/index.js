module.exports.home = function(req, res, next){

    let messageObj = {
        message: "Welcome to the Portfolio  Application"
    }

    res.json(messageObj);
}