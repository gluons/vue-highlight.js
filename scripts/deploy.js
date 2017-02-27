const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(path.join(__dirname, '../dist'), {
	message: 'Auto-generated gh-pages'
}, err => {
	if (err) {
		console.error(err);
	}
});
