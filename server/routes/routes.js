const express = require("express");
const { get, post } = require("../controllers/bio");
const router = express.Router();

router.get("/users", get);
router.post("/create", post);
module.exports = router;
