var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hdbrsObj = {
      burgers: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });
})

  router.post("/burgers/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
      res.redirect("/");
    })
      
  });

  router.put("/burgers/update", function(req, res){
    burger.updateOne(req.body.burger_id, function(result) {
      console.log(result);
      res.redirect("/");
    });
  });
  router.delete("/burgers/delete/:id", function(req, res) {
    burger.deleteOne(req.params.id, function(result) {
      res.redirect("/");
    })
  });

module.exports = router;
