var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(burger) {
    console.log(burger);
    res.render("index", {burger});
  })
})

router.put("/burgers/update",function(req, res) {
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect("/");
  });
});

router.post("/burgers/create",function(req, res) {
  burger.create(req.body.burger_name, function(result){
    res.redirect("/");
  });
});
module.exports = router;