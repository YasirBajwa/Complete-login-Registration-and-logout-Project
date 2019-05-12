var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", ensureAutenticated, function(req, res, next) {
  res.render("index", { title: "Members" });
});
function ensureAutenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/login");
}
module.exports = router;
