var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {

});

router.get('/partials', (req, res, next) => {
    res.render('partials', {
        title: 'Partial Test',
        heading: 'Partial Learning'
    });
});

module.exports = router;