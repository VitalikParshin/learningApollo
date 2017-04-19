import React, {Component} from 'react';

class Comment extends Component {
  state = {
    input: ""
  }

  render() {
    return (
      <div>
        <input value={this.state.input}></input>
        <button>ADD COMMENT</button>
      </div>
    )
  }
}

export default Comment;