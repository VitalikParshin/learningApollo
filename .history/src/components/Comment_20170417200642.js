import React, {Component} from 'react';

class Comment extends Component {
  state = {
    input: ""
  }

  render() {
    return (
      <div>
        <input></input>
        <button>ADD COMMENT</button>
      </div>
    )
  }
}

export default Comment;