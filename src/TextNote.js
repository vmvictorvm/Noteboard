import React from 'react';
import './App.css';
import Draggable from 'react-draggable'

var TextNote = React.createClass({

  //State: editing = true/false
  getInitialState() {
      return {editing: false};
  },

  //Set editing state to true
  edit() {
    this.setState({editing: true});
  },

  //Save the new text. (Will trigger update() function in TextBoard.js)
  //Change state to false
  save() {
    this.props.onChange(this.refs.newText.value, this.props.id);
    this.setState({editing: false});
  },

  //Remove text note (Will trigger remove() function in TextBoard.js)
  remove() {
      this.props.onRemove(this.props.id);
  },

  //Rendering the edit note form if "editing" state is true
  renderEditNote() {
      return (
        <div className="textNote">
          <textarea ref="newText" defaultValue={this.props.children}>
          </textarea>
          <button onClick={this.save}>Save</button>
        </div>
      );
  },

  //Rendering the text note if "editing" state is false
  renderTextNote() {
    return (
      <div className="textNote">
        {this.props.children}
        <div id="erBtn">
        <button onClick={this.edit}>Edit note</button>
        <button onClick={this.remove}>Remove note</button>
        </div>
      </div>
    );
  },

  //Render the text note.
  //Draggable allows users to drag the note around the page.
  render() {
    return (
      <Draggable>
        {(this.state.editing) ? this.renderEditNote() : this.renderTextNote()}
      </Draggable>
    );
  }
});

export default TextNote;
