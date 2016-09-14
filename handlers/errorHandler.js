module.exports = function(err, req, res, next){
	if(err.status === 404){
	res.status(err.status).send(err.message);
	}
}