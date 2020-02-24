const dbData = require('../db/db.json');



module.exports = function(app) {

  app.get('/api/notes', function(req, res) {
    res.json(dbData);
  });

  app.post('/api/notes', function(req, res) {
  
    if (db.json.length < {i}) {
      db.json.push(req.body);
      res.json(true);
    } else {
      notes.push(req.body);
      res.json(false);
    }
  });
}