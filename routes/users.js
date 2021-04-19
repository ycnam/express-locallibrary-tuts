var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/ycnam", function (req, res, next) {
  res.send("welcome to youngchul's page!");
});

module.exports = router;
