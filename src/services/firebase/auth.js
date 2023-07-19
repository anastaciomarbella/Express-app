const {getAuth} = require(`firebase-admin/auth`);
const app = require(`./index`)

function firebaseAuth(request,response,next){
    request.auth = getAuth(app);
    next();
}

module.exports = {firebaseAuth};