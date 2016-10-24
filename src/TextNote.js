import React from 'react';
import './App.css';
import Draggable from 'react-draggable'


var TextNote = React.createClass({

  renderTextNote() {
    return (
      <div className="textNote">
        Hello
      </div>
    )
  },

  render() {
    return (
      <Draggable>
        {this.renderTextNote()}
      </Draggable>
    )
  }
});

export default TextNote;
