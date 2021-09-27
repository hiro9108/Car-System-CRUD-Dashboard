const router = require("express").Router();
const carControllers = require("../controllers/car");

router.get("/", carControllers.getAllCarStatuses);
router.get("/:id", carControllers.getSpecificCarStatus);

router.post("/", carControllers.createCarStatus);

router.put("/:id", carControllers.updateSpecificCarStatus);

module.exports = router;
