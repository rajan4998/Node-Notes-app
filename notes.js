const fs = require('fs');

const fileName = 'notes.json';

const getNotes = () => {
    console.log( 'Your notes : ');
} 

const addNote = (title,body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title===title );

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

const saveNotes = (notes)=>{
    const jsonNotes = JSON.stringify(notes);
    fs.writeFileSync(fileName, jsonNotes)
}

const loadNotes = () =>{

    try {
        const notes = fs.readFileSync(fileName, 'UTF-8');
        const dataJson = JSON.parse(notes);
        return dataJson;
    }catch(e){
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const selectedNote = notes.filter((note)=>{
        if (note.title!=title){
            return true;
        }
    })

    saveNotes(selectedNote)
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    loadNotes: loadNotes,
    removeNote: removeNote
};