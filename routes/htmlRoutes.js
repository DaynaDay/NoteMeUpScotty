const path = require("path");
const fs= require("fs");

module.exports = function(app) {

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  
  // GET * - Should return the index.html file
  
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}