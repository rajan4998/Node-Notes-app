const fs = require('fs');

const fileName = 'notes.json';

const addNote = (title,body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note) => note.title===title );
    const duplicateNote = notes.find((note) => note.title===title)

    // if(duplicateNotes.length==0){
    if (!duplicateNote){
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

const searchNote = (title) => {
    const notes = loadNotes()
    const resultNote = notes.find((note)=>{
        if(note.title===title){
            return note;
            // console.log(note)
        }
    })
    
    if (resultNote){
        console.log(resultNote)
    }
    else{
        console.log('No Note found with the title : '+title)
    }
    // console.log(resultNote)
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

const listNotes = ()=>{
    const notes = loadNotes()

    notes.forEach((note)=>{
        console.log(note.title)
    })
}

module.exports = {
    addNote : addNote,
    loadNotes: loadNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    searchNote: searchNote
};