var fs = require('fs');
var pdf = require('html-pdf');

exports.pdf = function(req, res){
  createPDF(req.filename, req.dest_filename, req.options);
};

function createPDF(filename, dest_filename, options = { format: 'Letter' }) {
  var html = fs.readFileSync('./test/'+filename+'.html', 'utf8');
  pdf.create(html,options).toFile('./'+dest_filename+'.pdf', function(err, res){
    if (err) return console.log(err);
    console.log('Done');
  })
}
