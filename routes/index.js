const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});
router.use("/users", require("./users"));
router.use("/contacts", require("./contacts"));
router.use("/temples", require("./temples"))

module.exports = router;