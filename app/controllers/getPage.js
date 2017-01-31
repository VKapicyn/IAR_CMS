exports.ru = function (req, res){
    res.send('RU'+req.params.id);
}

exports.en = function (req, res){
    res.send('EN'+req.params.id);
}