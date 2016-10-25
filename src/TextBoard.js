import React from 'react';
import './App.css';
import TextNote from './TextNote'

//Use local storage
var LocalStorageMixin = require('react-localstorage');

var TextBoard = React.createClass({
mixins: [LocalStorageMixin],

  //State: textNotes array
  getInitialState() {
      return {textNotes: []};
  },

  //Finding the next ID to be used for textNote
  nextId() {
      return this.findMaxId()+1;
  },

  //Helper method for nextID. Finding the current max ID
  findMaxId(){
    var max = 0;
    this.state.textNotes.forEach((note) => {
      if (note.id > max) {
        max = note.id;
      }
    })
    return max;
  },

  //Adding new textNote to the textNotes array
  add(text) {
      var textNotes = [...this.state.textNotes,
          {
              id: this.nextId(),
              textNote: text
          }
      ]
      this.setState({textNotes})
  },

  //Updating text of the textNote
  update(newText, id) {
    var textNotes = this.state.textNotes.map((note) => {
      if (note.id === id) {
      	return { ...note,  textNote: newText};
      } else {
        return note;
      }
    })
    this.setState({textNotes})
  },

  //Remove testNote
  remove(id) {
    var textNotes = this.state.textNotes.filter((note) => {
      return note.id !== id;
    })
    this.setState({textNotes})
  },

  //Rendering the entire TextBoard component
  render() {
    return (
      <div className="textBoard">
        {this.state.textNotes.map( (note) => {
          return (<TextNote key={note.id}
                      id={note.id}
                      onChange={this.update}
                      onRemove={this.remove}>
                  {note.textNote}
          </TextNote>)
        }
        )}
        <button id="addBtn" onClick={() => this.add('New Note')}>Add New</button>
      </div>
    )
  }


});

export default TextBoard;
