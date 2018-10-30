var express = require("express");

var router = express.Router();

var thing = require("../models/catlateral");

router.get("/", function(req, res) {
  thing.all(function(data) {
    var hbsObject = {
      things: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/things", function(req, res) {
  thing.create(["name", "destroyed"], [req.body.name, req.body.destroyed], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/things/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  thing.update(
    {
      destroyed: req.body.destroyed
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

module.exports = router;