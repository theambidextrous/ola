const olaModel = require('../models/states_other_names');
module.exports = {
getById: function(req, res, next) {
    olaModel.findById(req.params.id, function(err, locInfo){
    if (err) {
    next(err);
    } else {
    res.json({status:"00", message: "Success", data:{data: locInfo}});
    }
    });
},
getByCountry: function(req, res, next) {
    olaModel.find({alpha2Code: req.params.countrycode}, function(err, locInfo){
        if (err) {
        next(err);
        } else {
        res.json({status:"00", message: "Success", data:{data: locInfo}});
        }
    });
},
getAll: function(req, res, next) {
  let olaList = [];
olaModel.find({}, function(err, names){
   if (err){
      next(err);
   } else{
       if(names){
            for (let name of names) {
                olaList.push({id: name._id, country: name.alpha2Code, otherNames: name.otherNames});
            }
            res.json({status:"00", message: "success", data:{data: olaList}});
       }else{
            res.json({status:"00", message: "no data found", data:null});
           return;
       }
   }
});
 },
create: function(req, res, next) {
  olaModel.create({ 
      alpha2Code: req.body.countrycode,
      otherNames: req.body.name
    }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "00", message: "success", data: null});
    });
 },
}