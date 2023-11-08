const express = require("express")
const devController = require("../controller/devController")
const router = express.Router()
const validate = require("../middleware/validateDto")
const devDto = require("../Dto/devDto")

router.post("/dev", validate(devDto),devController.createDev);


module.exports = router;