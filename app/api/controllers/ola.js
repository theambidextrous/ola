const olaModel = require('../models/ola');
module.exports = {
getById: function(req, res, next) {
    //console.log(req.body);
    olaModel.find(req.params.locationid, function(err, locInfo){
    if (err) {
    next(err);
    } else {
    res.json({status:"00", message: "Success", data:{location: locInfo}});
    }
    });
},
getByCountry: function(req, res, next) {
//console.log(req.body);
    olaModel.find(req.params.countrycode, function(err, locInfo){
        if (err) {
        next(err);
        } else {
        res.json({status:"00", message: "Success", data:{location: locInfo}});
        }
    });
},
getByRegion: function(req, res, next) {
//console.log(req.body);
    olaModel.find(req.params.region, function(err, locInfo){
        if (err) {
        next(err);
        } else {
        res.json({status:"00", message: "Success", data:{location: locInfo}});
        }
    });
},
getByCategory: function(req, res, next){
    olaModel.find(req.params.category, function(err, locInfo){
        if (err) {
        next(err);
        } else {
        res.json({status:"00", message: "Success", data:{location: locInfo}});
        }
    });
},
getByLocation: function(req, res,next){
    olaModel.find(req.params.location, function(err, locInfo){
        if (err) {
        next(err);
        } else {
        res.json({status:"00", message: "Success", data:{location: locInfo}});
        }
    });
},
getAll: function(req, res, next) {
  let olaList = [];
olaModel.find({}, function(err, locations){
   if (err){
    next(err);
   } else{
       if(locations){
            for (let location of locations) {
                olaList.push({locationid: location.locationid, location: location.location, category: location.category});
            }
            res.json({status:"00", message: "success", data:{locations: olaList}});
       }else{
            res.json({status:"00", message: "no data found", data:null});
           return;
       }
   }
});
 },
updateById: function(req, res, next) {
  olaModel.findByIdAndUpdate(req.params.locationid,{location:req.body.locationid}, function(err, locInfo){
if(err)
    next(err);
   else {
    res.json({status:"00", message: "success", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  olaModel.findByIdAndRemove(req.params.locationid, function(err, locInfo){
   if(err)
    next(err);
   else {
    res.json({status:"00", message: "success", data:null});
   }
  });
 },
create: function(req, res, next) {
  olaModel.create({ 
      locationid: req.body.locationid,
      location: req.body.location,
      category: req.body.category,
      region: req.body.region,
      countrycode: req.body.countrycode,
      lat: req.body.lat,
      long: req.body.long,
      elevfeet: req.body.elevfeet,
      popest: req.body.popest,
      country: req.body.country
    }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "00", message: "success", data: null});
    });
 },
}