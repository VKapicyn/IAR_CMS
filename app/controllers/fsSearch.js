var fs = require('fs');

exports.page = function(req, res){
    let alias = [];
    let titles = [];

    /*if ((req.cookies['lang'] == 'ru') || (req.cookies['lang'] == undefined)) {
        console.log(fs.readFileSync('src/' + req.params.alias + '_ru' + '.html', 'utf8')
            .replace(/<\/?[^>]+>/g,'')
        );
    }
    else {
        console.log(fs.readFileSync('src/' + req.params.alias + '_en' + '.html', 'utf8')
            .replace(/<\/?[^>]+>/g,'')
        );
    }*/
}

exports.liveSearch = function(req, res){
    let result = [];
    let config = JSON.parse(fs.readFileSync('src/data/config.json', 'utf8'));
    let lang = ((req.cookies['lang'] == 'ru') || (req.cookies['lang'] == undefined)) ? 'ru' : 'en';

    for(let i=0; i<config.pages.length; i++){
        try{
            let object = {};
            let alias = config.pages[i]['alias'];
            object.text = fs.readFileSync('src/' + alias + '_' + lang + '.html', 'utf8')
                .replace(/<\/?[^>]+>/g,'');
            object.title = lang == 'ru' ? config.pages[i]['title_ru'] : config.pages[i]['title_en'];
            result.push(object);
        }
        catch(err){
            continue;
        }
    }

    res.send(result);
}

exports.stadnartSearch = function(req, res){

}