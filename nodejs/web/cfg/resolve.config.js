let defaults = require('./defaults');

module.exports = {
	extensions: ['.js', '.jsx'],
	alias: {
		commons: `${defaults.srcPath}/commons/`,
		components: `${defaults.srcPath}/components/`,
		images: `${defaults.srcPath}/images/`,
		pages: `${defaults.srcPath}/pages/`,
		styles: `${defaults.srcPath}/styles/`,
		lib: `${defaults.srcPath}/lib/`
	}
}