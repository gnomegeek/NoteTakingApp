const yargs = require('yargs')

const utilsNotes = require('./notes.js')
const argv = yargs.argv;


// Add a note
yargs.command(
    "add",
    "adding a new node",
    {
        title: {
            demandOption: true,
            type: String,
        },
        body: {
            demandOption: true,
            type: String
        }
    },
    function () {
        utilsNotes.addNote(argv.title, argv.body)
    }
)


// Removing a note
yargs.command(
    "remove",
    "Removing a node",
    {
        title: {
            demandOption: true,
            type: String,
        }
    },
    function () {
        utilsNotes.removeNote(argv.title);
    }
)


// Listing
yargs.command(
    "list",
    "Listing all nodes",
    {},
    function () {
        utilsNotes.listNotes();
    }
)

// Searching
yargs.command(
    "search",
    "seaching a node",
    {
        title: {
            demandOption: true,
            type: String,
        }
    },
    function () {
        utilsNotes.searchNote(argv.title);
    }
)


yargs.parse();
