var orm = require("../config/orm");

var things = {
  all: function(cb) {
    orm.all("things_to_destroy", function(res) {
      cb(res);
    });
  },
  
  create: function(cols, vals, cb) {
    orm.create("things_to_destroy", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb)
   {
    console.log(objColVals);
    orm.update("things_to_destroy", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = things;