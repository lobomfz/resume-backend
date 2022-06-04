const Console = require('./Console');
const Build = require('./Build');
const NewBuild = require('./NewBuild');

module.exports = (app) => {
	app.get('/api/console', Console.get);
	app.get('/api/build', Build.get);
	app.post('/api/newbuild', NewBuild.post);
};
