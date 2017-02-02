var fs = require('fs');

exports.ru = function (req, res){
    res.render(req.params.id + '_ru' + '.html', {title:getTitle(req.params.id, 'ru')}, function(err, html){
        if (err) {
            res.redirect('/page/404');
        }
        else {
            res.send(html);
        }
    });
}

exports.en = function (req, res){
    res.render(req.params.id + '_en' + '.html', {title:getTitle(req.params.id, 'en')}, function(err, html){
        if (err) {
            res.redirect('/page/404');
        }
        else {
            res.send(html);
        }
    });
}

function getTitle(alias, lang){
    let titleList = getPagesConfig();
    let index = getPageIndexByAlias(alias, titleList);
    let titlelang = 'title_'+lang;
    return titleList.pages[index].titlelang;
}

function getPagesConfig(){
    let v_t = JSON.parse(fs.readFileSync('src/data/config.json', 'utf8'));
    return v_t;
}

function getPageIndexByAlias(search_alias, list=Array()) {
  for (var i=0; i<list.pages.length;i++) {
    if (list.pages[i].alias==search_alias){
      return i;
    }
  }
}
