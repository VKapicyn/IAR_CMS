var fs = require('fs');


exports.page = function(req, res){
	try {
		if ((req.cookies['lang'] == 'ru') || (req.cookies['lang'] == undefined)) {
			res.render(req.params.alias + '_ru' + '.html', {
				title: getTitle(req.params.alias, 'ru')
			});
		}
		else{
			res.render(req.params.alias + '_en' + '.html', {
				title: getTitle(req.params.alias, 'en')
			});
		}
	}
	catch (err) {
		res.redirect('/page/404');
	}
}

function getTitle(alias, lang) {
	let config = getPagesConfig();
	let index = getPageIndexByAlias(alias, config);
	let titlelang = 'title_' + lang;
	return config.pages[index][titlelang];
}

function getPagesConfig() {
	let config = JSON.parse(fs.readFileSync('src/data/config.json', 'utf8'));
	return config;
}

function getPageIndexByAlias(search_alias, list = Array()) {
	for (var i = 0; i < list.pages.length; i++) {
		if (list.pages[i].alias == search_alias) {
			return i;
		}
	}
}
