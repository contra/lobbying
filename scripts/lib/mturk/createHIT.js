var mturk = require('./');

module.exports = function(opt, cb) {
  mturk.then(sendRequest).catch(cb);

  function sendRequest(api){
    var hit = {
      Title: opt.title,
      Description: opt.description,
      AssignmentDurationInSeconds: opt.duration,
      LifetimeInSeconds: opt.lifetime,
      Reward: opt.reward
    };
    api.req('CreateHIT', hit).then(function(res){
      console.log(JSON.stringify(res));
      cb(null, res);
    }).catch(cb);
  }
};
