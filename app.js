const yargs = require('yargs');

const notes = require('./notes.js');

yargs.version('1.1.1');

yargs.command({
    command : 'add',
    describe : 'Add a Note',
    builder : {
        title : {
            describe : 'Title of a Note',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Body of a Note',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        notes.addNote(argv.title, argv.body)
    }
});

yargs.command({
    command : 'remove',
    describe : 'Remove a particular Note',
    builder : {
        title : {
            describe : 'Title required to remove a Note',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        notes.removeNote(argv.title)
    }
})

//create a list command
yargs.command({
    command : 'list',
    describe : 'Shows all the Notes',
    handler : function(argv){
        const allNotes = notes.loadNotes()
        console.log(allNotes)
    }
})

//create a read title command
yargs.command({
    command : 'read-title',
    describe : 'This brings a title for all the Notes to read',
    handler  : function(argv){
        notes.listNotes()
    }
})

//create a read command
yargs.command({
    command : 'read',
    describe: 'This brings a particular Note to read',
    builder : {
        title : {
            describe : 'Title is the search key',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        notes.searchNote(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()