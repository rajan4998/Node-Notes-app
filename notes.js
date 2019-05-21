const fs = require('fs');

const fileName = 'notes.json';

const getNotes = function(){
    return 'Your notes : ';
}

const addNote = function(title,body){
    const notes = loadNotes()

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

const saveNotes = function(notes){
    const jsonNotes = JSON.stringify(notes);
    fs.writeFileSync(fileName, jsonNotes)
}

const loadNotes = function(){

    try {
        const notes = fs.readFileSync(fileName, 'UTF-8');
        const dataJson = JSON.parse(notes);
        return dataJson;
    }catch(e){
        return [];
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    loadNotes : loadNotes
};