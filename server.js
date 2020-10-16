// her opretter jeg min server vha. af node.js 
// jeg installere npm, express og cors, soim jeg bruger til at oprette min server på port 3000
const express = require ('express')

const cors = require('cors')

const app = express()

app.use(cors())

app.listen(3000, function(){});



// Her henter jeg mine controllers fra godkendelsesmappen, controllermappen og til sidst selve controlleren.
const UserController = require("../Godkendelsesopgave3/controller/UserController")
const protectedController = require('../Godkendelsesopgave3/controller/protectedcontroller')
const loginController = require('../Godkendelsesopgave3/controller/logincontroller')

// Her henter jeg min ensuretoken fra middlewaremappen, som bruges til at kryptere 
const ensureToken = require("../Godkendelsesopgave3/Middleware/ensureToken");

// opretter crud-endpoints så min token kan fungere
app.get("/", UserController);
app.get("/protect", ensureToken, protectedController);
app.post("/login", loginController);


// henter userarrayet som bruges til at give free -og paymentuser de rigtige attributter
const UserArray = require("../Godkendelsesopgave3/harduser");
let UserJuan = UserArray[0]
let UserTwo = UserArray[1]

// her opretter de 4 crud-endpoints for henholdsvis user,match og interest

//get request for user
app.get('/userinformation',UserController)

//post request for user
app.post('/userinformation', (reg, res) => {
    res.send('post request');
});


// put request for user
app.put('/userinformation', (reg, res) => {
    res.send('put request');
});

//Delete request for user
app.delete('/userinformation', (reg, res) => {
    res.send('delete request');
});

//GET REQUEST = Interest GET/read bruges til at læse ressourcer. Get henter information
app.get('/userinformation/interest', (req, res) => { // denne skal bruges til Interest // 
    res.send("Userjuan: " + UserJuan.interest + " Usertwo: " + UserTwo.interest);
});

//post request for interest. 
app.post('/userinformation/interest', (req, res) => { // denne skal bruges til Interest //post

    res.send('Post request');
});

//put request for interest
app.put('/userinformation/interest', (req, res) => { // denne skal bruges til Interest // put ('/') 

    res.send('Put request');
});


//delete request for interest 
app.delete('/userinformation/interest', (req, res) => { // denne skal bruges til Interest // Delete ('/') 

    res.send('Delete request');
});

//GET REQUEST = Match GET/read bruges til at læse ressourcer. 
app.get('/userinformation/match', (req, res) => { // denne skal bruges til Match // 
    res.send("Userjuan: " + UserJuan.match + " Usertwo: " + UserTwo.match);
});

//POST REQUEST 
app.post('/userinformation/match', (req, res) => { // denne skal bruges til Match // 
    res.send("Post request");
});

//PUT REQUEST 
app.put('/userinformation/match', (req, res) => { // denne skal bruges til Match // 
    res.send("Put request");
});

//DELETE REQUEST 
app.delete('/userinformation/match', (req, res) => { // denne skal bruges til Match // 
    res.send("Delete request");
});


