/* GET About page */
module.exports.about = function(req, res) {
  res.render('index', { title: 'About' });
};
