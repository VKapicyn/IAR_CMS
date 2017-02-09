var express = require('express'),
	router = express.Router();
var getPage = require('./controllers/getPage');
var getPDF = require('./controllers/getPDF');
var fsSearch = require('./controllers/fsSearch');
var _lang = 'ru';

//создание PDF-версии HTML-файла из get-запроса
router.get('/pdf/:page', function(req, res) {
	var lang = req.cookies['lang'] == undefined ? 'ru' : req.cookies['lang'];
	getPDF.pdf({
		filename: req.params.page,
		dest_filename: 'export',
		lang: lang
	}, res);
});

router.get('/page/:alias', getPage.page);
router.get('/search', fsSearch.liveSearch);
router.post('/search/str', fsSearch.postSearch);

router.get('/', function(req, res) {
	res.redirect('/page/main');
});

module.exports = router;
