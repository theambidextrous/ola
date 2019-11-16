const bonModel = require('../models/blocs_other_names');
module.exports = {
getById: function(req, res, next) {
    bonModel.findById(req.params.blocId, function(err, blocInfo){
    if (err) {
        next(err);
    } else {
        res.json({status:"00", message: "Success", data:{namelist: blocInfo}});
    }
    });
},
getByBloc: function(req, res, next) {
    bonModel.find({bloc: req.params.blocAcronym}, function(err, blocInfo){
        if (err) {
        next(err);
        } else {
        res.json({status:"00", message: "Success", data:{namelist: blocInfo}});
        }
    });
},
getAll: function(req, res, next) {
  let olaList = [];
bonModel.find({}, function(err, othernames){
   if (err){
        next(err);
   } else{
       if(othernames){
            for (let othername of othernames) {
                olaList.push({id: othername._id, bloc: othername.bloc, name: othername.otherName});
            }
            res.json({status:"00", message: "success", data:{namelist: olaList}});
       }else{
            res.json({status:"00", message: "no data found", data:null});
           return;
       }
   }
});
 },
create: function(req, res, next){
  bonModel.create({ 
      bloc: req.body.bloc,
      otherName: req.body.name
    }, function (err, result){
      if (err) 
       next(err);
      else
       res.json({status: "00", message: "success", data: null});
    });
 },
}