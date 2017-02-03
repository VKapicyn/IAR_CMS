var express = require('express')
    , router = express.Router();
var getPage = require('./controllers/getPage');
var getPDF = require('./controllers/getPDF');
var _lang = 'ru';
//здесь будет распределение по языку
router.use('/page/:alias', function (req, res, next) {
    //данное условие будет заменено на проверку соотвествующих cookie
    if (req.method = 'GET' && (req.params.id != 'ru')) {
        getPage.ru(req, res);
    }
    //console.log(req.cookies['lang'])
    if ((req.cookies['lang'] == 'RU') || (req.cookies['lang'] == undefined)) getPage.ru(req, res);
    _lang = 'ru';
    else {
        getPage.en(req, res);
        _lang = 'en';
    }
    next();
});
//создание PDF-версии HTML-файла из get-запроса
router.get('/pdf/:page', function (req, res) {
    getPDF.pdf({
        filename: req.params.page
        , dest_filename: 'export'
        , lang: _lang
    }, res);
});
//основные маршруты
router.get('/', function (req, res) {
    res.send('test');
});
module.exports = router;