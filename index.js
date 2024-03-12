const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('toRBS4grii', uuidlib.v4());
	}

module.exports = generateId
