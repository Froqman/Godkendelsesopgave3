// Her opretter jeg en funktion ved hjælp at ensureToken

// bearer skal skrives foran tokenens lange kode for at kunne svare på min request og sende userdataen
function ensureToken(req, res, next){
    // authorization bruges til at verificere hvad der skal gives adgang til
    // i dette tilælde det jeg har kaldt userinformation aka. harduser
    const header = req.headers["authorization"]
    if (header == undefined){
        res.sendStatus(403)
    } else{
        const bearer = header.split(" ")
        const headerToken = bearer[1]
        req.token = headerToken
        next()
        
    }
}
// exportere min controller.
module.exports = ensureToken