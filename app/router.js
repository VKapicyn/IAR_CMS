var express = require('express'),
    router = express.Router();
var getPage = require('./controllers/getPage');
var getPDF = require('./controllers/getPDF').pdf;

//здесь будет распределение по языку
router.use('/page/:id', function(req, res, next) {
    //данное условие будет заменено на проверку соотвествующих cookie
    if (req.method='GET' && (req.params.id!='ru'))
        getPage.ru(req, res);
    else
        getPage.en(req, res);
    next();
});

//создание PDF-версии HTML-файла из get-запроса
router.get('/pdf/:page', function(req, res){
  getPDF({filename:req.params.page, dest_filename:'export'});
});

//основные маршруты
router.get('/',function(req, res) {
    res.send('test');
});

module.exports = router;
