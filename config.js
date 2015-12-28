

var config;
config= {
	views:'ejs',
	staticPath: 'http://blog.Jayie.com:81',
	dbPath:'http://localhost:27017',
	api:{
		'getUserByCode':'/user/getUserByCode'
	}
};
module.exports = config;