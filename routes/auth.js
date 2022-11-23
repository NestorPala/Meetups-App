const { verifyRegister } = require("../middleware/verifyRegister");
const authController = require("../controllers/authController");
const { verifyToken } = require("../middleware/authJwt");

module.exports = (app) => {
    app.post("/Meetups-App/auth/register",
        verifyToken, verifyRegister, authController.register);

    app.post("/Meetups-App/auth/login",
        authController.login);

    app.post("/Meetups-App/auth/logout",
        verifyToken, authController.logout);
};
