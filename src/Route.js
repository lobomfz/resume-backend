const Controller = require('./Controller');

module.exports = (app) => {
	app.get('/console', Controller.get);
};
