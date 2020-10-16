// henter min userfile med det hardcodede data
const UsersAll = require('../HardUser')

//require jsonwebtoken vha. node js
var jwt = require('jsonwebtoken');



function loginController(req, res) {
   //kigger ikke på password 
    //Her laves en token for users, som dør om 2 timer kaldet "iskold", det samme er min protectectedcontroller
    const token = jwt.sign({UsersAll}, 'iskold', { expiresIn: '2h' })
    res.json({
        token: token
    })
}

//exportere logincontrolleren
module.exports = loginController
