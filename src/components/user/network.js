const express = require(`express`);
const Controller = require(`./controller`);

const router = express.Router();

function addUsers(req, res) {
    const { email, password, displayName } = req.body;
    const { auth } = req;
    Controller.addUsers({ auth, email, password, displayName })
        .then((data) => res.status(201).send(data))
        .catch((error) => res.status.send(error));
}


router.post("/", addUsers);

// /users

// post
//get
//patch
//put
// delete

module.exports = router;