const express = require("express");

var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET /notes - Should return the notes.html file.

// GET * - Should return the index.html file


// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
