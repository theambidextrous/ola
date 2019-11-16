const olaModel = require('../models/states_currencies');
module.exports = {
getById: function(req, res, next) {
    olaModel.findById(req.params.id, function(err, locInfo){
    if (err) {
    next(err);
    } else {
    res.json({status:"00", message: "Success", data:{currency: locInfo}});
    }
    });
},
getByCountry: function(req, res, next) {
    olaModel.find({alpha2Code: req.params.countrycode}, function(err, locInfo){
        if (err) {
        next(err);
        } else {
        res.json({status:"00", message: "Success", data:{currencies: locInfo}});
        }
    });
},
getAll: function(req, res, next) {
  let olaList = [];
olaModel.find({}, function(err, currencies){
   if (err){
      next(err);
   } else{
       if(currencies){
            for (let currency of currencies) {
                olaList.push({id: currency._id, country: currency.alpha2Code, code: currency.code, name: currency.name, symbol: currency.symbol});
            }
            res.json({status:"00", message: "success", data:{currencies: olaList}});
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
      code: req.body.code,
      name: req.body.name,
      symbol: req.body.symbol
    }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "00", message: "success", data: null});
    });
 },
}