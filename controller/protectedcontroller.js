// Henter user data og jsonwebtoken
var UsersAll = require('../HardUser')
var jwt = require('jsonwebtoken');


//opretter en funktion for min logincontroller, som svare på en request
function loginController(req, res) {
    console.log(req.token)
   //Her hedder tokenen "iskold" ligesom i min logincontroller
   // hvis koden ikke er "iskold" vil requesten på tokenen svare error 403 eller function not valid eller noget i den stil
   //når koden er den samme vil den så svare "beskyttet" og sende tokenen på min request.
    jwt.verify(req.token, 'iskold', function(err, data){
        if(err){
            res.sendStatus(403);
        } else{
            res.json({
                msg: "Beskyttet",
                data: data
            })
        }
    }) 
}

//exportere min logincontroller
module.exports = loginController