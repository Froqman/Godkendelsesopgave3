
// henter den hardcorede user ud fra den model klasse jeg har lavet
const UsersAll = require('../harduser');

//opretter min controller for userAll
function UserController(req, res) {
    res.send(UsersAll)
}

//exportere usercontrolleren så den kan bruges andre steder.
module.exports = UserController