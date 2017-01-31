var express = require('express'),
    router = express.Router();


var getPage = require('./controllers/getPage');

//здесь будет распределение по языку
router.use('/page/:id', function(req, res, next) {
    console.log(req.method, req.url, req.params.id, 'page');
    if (req.method='GET' && (req.params.id=='ru'))
        getPage.ru(req, res);
    else
        getPage.en(req, res);
    next(); 
});

//основные маршруты
router.get('/',function(req, res) {
    res.send('test');
});

module.exports = router;