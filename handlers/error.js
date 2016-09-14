module.exports = function(err, req, res, next){
	if(err.status === 404){
	return res.status(err.status).send(err.message);
	}
	res.send(err);
}