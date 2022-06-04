const Console = require('./Console');
const Build = require('./Build');

module.exports = (app) => {
	app.get('/api/console', Console.get);
	app.get('/api/build', Build.get);
};
