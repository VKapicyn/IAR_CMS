var fs = require('fs');

exports.ru = function (req, res){
    res.render(req.params.id + 'RU' + '.html', {title:getTitle(req.params.id, 'RU')}, function(err, html){
        if (err) {
            res.redirect('/page/404');
        } 
        else {
            res.send(html);
        }
    });
}

exports.en = function (req, res){
    res.render(req.params.id + 'EN' + '.html', {title:getTitle(req.params.id, 'EN')}, function(err, html){
        if (err) {
            res.redirect('/page/404');
        } 
        else {
            res.send(html);
        }
    });
}

function getTitle(view, lang){
    let titleList = getViewsAndTitles(lang);
    return titleList[view]; 
}

function getView(title, lang){
    let titleList = getViewsAndTitles(lang);
    for(let t in titleList)
        if (t == title)
            return t;
}

function getViewsAndTitles(lang){
    let v_t = JSON.parse(fs.readFileSync('src/data/title'+lang+'.json', 'utf8'));
    return v_t;
}