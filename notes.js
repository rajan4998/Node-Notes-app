const fs = require('fs');

const fileName = 'notes.json';

const getNotes = function(){
    return 'Your notes : ';
}

const addNote = function(title,body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title===title;
    })

    if(duplicateNotes.length==0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New Note added')
    }else{
        console.log('A Note with same title exists!')
    }
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

const removeNote = function(title){
    const notes = loadNotes()

    const selectedNote = notes.filter(function(note){
        if (note.title!=title){
            return note;
        }
    })

    saveNotes(selectedNote)
}

const findNote = function(title){
    console.log('search for note from the file')
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    loadNotes: loadNotes,
    removeNote: removeNote
};