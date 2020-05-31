const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes();

    const array = notes.filter((note) => {
        return note.title === title
    })

    if(array.length === 0) {
        notes.push( {
            title,
            body
        })
    
        saveNotes(notes);
        console.log('Adding note successful');
        
    } else {
        console.log('Sorry title already in use');
        
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes();
    var newNotes = [];
    for(var i = 0; i < notes.length; i ++) {
        if(notes[i].title !== title) {
            newNotes.push(notes[i]);
        }
    }
    if(newNotes.length === notes.length) {
        console.log('No such note found');
    } else {
        saveNotes(newNotes);
        console.log('Note removed');
    }
}


const listNotes = function() {
    const notes = loadNotes();
    console.log(notes);
}

const searchNote = (title) => {
    const notes = loadNotes();
    var flag = 0;
    for(var i = 0; i < notes.length; i ++) {
        if(notes[i].title === title) {
            console.log(`${notes[i].title} ${notes[i].body}`);
            flag = 1;
            break;
        }
    }

    if(flag === 0) {
        console.log("No such Note found");
    }
}

const loadNotes = () => {
    try {
        const dataJSON = JSON.parse(fs.readFileSync('notes.json').toString());
        return dataJSON;
    } catch (error) {
        return [];
    }
} 

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    searchNote,
}