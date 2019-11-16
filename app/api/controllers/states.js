const olaModel = require('../models/states');
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
olaModel.find({}, function(err, states){
   if (err){
      next(err);
   } else{
       if(states){
            for (let state of states) {
                olaList.push({id: state._id, countrycode: state.alpha2Code, name: state.name, capital: state.capital, region: state.region});
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
      name: req.body.name,
      domain: req.body.domain,
      alpha2Code: req.body.countrycode,
      alpha3Code: req.body.countrycode2,
      capital: req.body.capital,
      region: req.body.region,
      subregion: req.body.subregion,
      population: req.body.population,
      lat: req.body.lat,
      long: req.body.long,
      demonym: req.body.demonym,
      area: req.body.area,
      gini: req.body.gini,
      nativeName: req.body.nativeName,
      numericCode: req.body.numericCode,
      flag: req.body.flag,
      cioc: req.body.cioc
    }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "00", message: "success", data: null});
    });
 },
}