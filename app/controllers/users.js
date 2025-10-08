module.exports.getUser = function (req, res, next){

  console.log(req.params.userId);

  let user = {
    id: req.params.userId,
    name: 'john',
    email: 'john@smith.ca'
  }

  res.json(user);
}