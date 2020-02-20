const express = require("express");
const fs = require("fs")

var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET /notes - Should return the notes.html file.

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET * - Should return the index.html file

app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

app.get('/api/notes', function(req, res) {
  res.json(db.json);
});

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.


app.post('/api/notes', function(req, res) {
  
  if (db.json.length < {i}) {
    db.json.push(req.body);
    res.json(true);
  } else {
    notes.push(req.body);
    res.json(false);
  }
});



require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
