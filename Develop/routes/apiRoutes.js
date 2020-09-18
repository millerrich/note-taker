var notes = require("../db/db.json");

const { v4: uuidv4 } = require('uuid');
//work with instructor on uuid


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });
    
    app.post("/api/notes", function(req, res) {
        console.log(req.body);
        const note = req.body;
        note.id = uuidv4();
        
        notes.push(note);
        res.json(note);
    })

    app.delete("/api/notes/:id", function(req, res) {
        notes = notes.filter(note => note.id !== req.params.id);
        res.json("");
    })

}