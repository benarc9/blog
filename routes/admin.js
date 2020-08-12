let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	res.render('admin', {
		title: 'Admin',
		heading: 'Admin'
	});
});

module.exports = router;
