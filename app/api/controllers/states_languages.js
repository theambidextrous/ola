const olaModel = require('../models/states_languages');
module.exports = {
getById: function(req, res, next) {
    olaModel.findById(req.params.id, function(err, locInfo){
    if (err) {
    next(err);
    } else {
    res.json({status:"00", message: "Success", data:{language: locInfo}});
    }
    });
},
getByCountry: function(req, res, next) {
    olaModel.find({alpha2Code: req.params.countrycode}, function(err, locInfo){
        if (err) {
        next(err);
        } else {
        res.json({status:"00", message: "Success", data:{languages: locInfo}});
        }
    });
},
getAll: function(req, res, next) {
  let olaList = [];
olaModel.find({}, function(err, languages){
   if (err){
      next(err);
   } else{
       if(languages){
            for (let language of languages) {
                olaList.push({id: language._id, country: language.alpha2Code, code: language.iso639_1, code2: language.iso639_2, name: language.name, nativeName: language.nativeName});
            }
            res.json({status:"00", message: "success", data:{languages: olaList}});
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
      iso639_1: req.body.code,
      iso639_2: req.body.code2,
      name: req.body.name,
      nativeName: req.body.nativeName
    }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "00", message: "success", data: null});
    });
 },
}