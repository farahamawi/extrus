var blogController = require('../blogs/blogController.js');
var userController = require('../users/userController.js');
var helpers = require('./helpers.js');

// exporting DB controller's functions
module.exports = function(app, express){

	app.post('/api/users/signin', userController.signin);
	app.get('/api/users/signedin', userController.checkAuth);
	app.get('/api/users', userController.getAllUsers);
	app.post('/api/users', userController.newUser);
	app.post('/api/users/forget', userController.forgetPassUser);
	app.post('/api/users/editProfile', userController.editProfile);

	app.get('/api/blogs', blogController.getAllBlogs);
	app.post('/api/blogs', blogController.newBlog);

	// If a request is sent somewhere other than the routes above,
	// send it through custom error handler
	app.use(helpers.errorLogger);
	app.use(helpers.errorHandler);
};