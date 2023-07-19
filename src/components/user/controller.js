function addUser(params){
    const {auth, email,password, displayName} = params;
    return auth.createUser({
        email,
        password,
        displayName,
           })
}

module.exports ={
    addUser 
}
 