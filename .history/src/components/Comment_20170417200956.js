import React, {Component} from 'react';

class Comment extends Component {
  state = {
    input: ""
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    console.log(this.state.input)
    return (
      <div>
        <input onChange={this.handleChange.bind(this)}  value={this.state.input} ></input>
        <button>ADD COMMENT</button>
      </div>
    )
  }
}

export default Comment;