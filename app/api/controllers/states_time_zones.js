const olaModel = require('../models/states_time_zones');
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
olaModel.find({}, function(err, zones){
   if (err){
      next(err);
   } else{
       if(zones){
            for (let zone of zones) {
                olaList.push({id: zone._id, country: zone.alpha2Code, timeZone: zone.timeZone});
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
      timeZone: req.body.timezone
    }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "00", message: "success", data: null});
    });
 },
}