const olaModel = require('../models/states_borders');
module.exports = {
getById: function(req, res, next) {
    olaModel.findById(req.params.id, function(err, locInfo){
    if (err) {
    next(err);
    } else {
    res.json({status:"00", message: "Success", data:{border: locInfo}});
    }
    });
},
getByCountry: function(req, res, next) {
    olaModel.find({alpha2Code: req.params.countrycode}, function(err, locInfo){
        if (err) {
        next(err);
        } else {
        res.json({status:"00", message: "Success", data:{borders: locInfo}});
        }
    });
},
getAll: function(req, res, next) {
  let olaList = [];
olaModel.find({}, function(err, borders){
   if (err){
    next(err);
   } else{
       if(borders){
            for (let border of borders) {
                olaList.push({id: border._id,country: border.alpha2Code, border: border.border});
            }
            res.json({status:"00", message: "success", data:{borders: olaList}});
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
      border: req.body.border
    }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "00", message: "success", data: null});
    });
 },
}