module.exports = function(err, req, res, next){
	console.log(err);
	res.status(err.status).send(err.message);
}