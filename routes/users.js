const express = require("express");
const router = express.Router();
const {
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
    checkUser,
} = require("../controllers/userController");
const { verifyAdmin } = require("../middleware/verifyAdmin");

router.get("/",
    verifyAdmin, getAllUsers);

router.get("/:user_id",
    verifyAdmin, checkUser, getUser);

router.patch("/update/:user_id",
    verifyAdmin, checkUser, updateUser);

router.delete("/delete/:user_id",
    verifyAdmin, checkUser, deleteUser);

module.exports = router;