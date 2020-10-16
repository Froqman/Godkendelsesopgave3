//henter 'userfile' ved hjælp af require
const FreeUser = require('./Model/userfile')
const PaymentUser = require('./Model/userfile')


//laver et array
let UserArray = [];


//hardcoder de 2 users, henholdsvis Free -og paymentuser
let UserJuan = new FreeUser[2] ("oscar", "oscarsen", 20, "male","","tennis", "liselotte", "", "", "")
let UserTwo = new PaymentUser[1] ("liselotte", "hansen", 23, "female","", "tennis", "oscar", "", "", "", "1234 1235 1236 1237 - 999 - 20/10")


//samler de 2 brugere i arrayet og exportere det så jeg kan bruge det i andre filer vha. module.exports
UserArray = [UserJuan,UserTwo]

module.exports = UserArray

