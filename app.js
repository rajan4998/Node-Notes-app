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

//create a remove command
yargs.command({
    command : 'remove',
    describe : 'This command removes a Note',
    handler : function(){
        console.log('Note removed')
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

//create a read command
yargs.command({
    command : 'read',
    describe : 'This brings a particular Note to read',
    handler  : function(){
        console.log('Note read')
    }
})

// console.log(yargs.argv)
yargs.parse()