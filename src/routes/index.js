require("express")
const users = require("../components/user/network");
const main = require("../components/main/network");
const allRoutes = require("../utils/constants/routers.json");

const routes = (server) => {
    server.use(allRoutes.users, users);
    server.use(allRoutes.main, main);
}

module.exports = routes;