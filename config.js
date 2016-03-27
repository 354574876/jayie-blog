var config;
config= {
	views:'ejs',
	staticPath: 'http://blog.Jayie.com:81',
	dbPath:'http://localhost:27017',
	api:{
		'getUserByCode':'/user/getUserByCode'
	},
	router:[
		{router:'/users',url:'./routes/users'},
		{router:'/login',url:'./routes/user'},
		{router:'/',url:'./routes/index'},
		{router:'/index',url:'./routes/index'},
	]
};
module.exports = config;