var state = optimizely.get('state');
var exp_obj =state.getExperimentStates({
  "isActive": true
});
var exp_id = parseInt(Object.keys(exp_obj)[0]);
var data = optimizely.get("data");
var variation_name_1= data.experiments[exp_id].variations[0].name;
var variation_name_2= data.experiments[exp_id].variations[1].name;
