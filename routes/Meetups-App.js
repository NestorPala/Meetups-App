const express = require("express");
const router = express.Router();
const { welcome } = require("../controllers/welcomeController");
const { verifyToken } = require("../middleware/authJwt");
const { verifyAdmin } = require("../middleware/verifyAdmin");

router.get("/", verifyToken, welcome);

const meetupsRouter = require("./meetups");
router.use("/meetups", verifyToken, meetupsRouter);

const notificationsRouter = require("./notifications");
router.use("/notifications", verifyToken, notificationsRouter);

const usersRouter = require("./users");
router.use("/users", verifyToken, verifyAdmin, usersRouter);


module.exports = router;