import './style.css'

import React, {Component} from 'react';
import { gql, graphql } from 'react-apollo';

import update from 'react-addons-update';

class Comment extends Component {
  state = {
    input: ""
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  inputValue() {
    const name = this.state.input
    this.props.mutate({
      variables:{name},
      updateQueries: {
        Comment: (prev, { mutationResult }) => {
          const newComment = mutationResult.data.submitComment;
          return update(prev, {
            entry: {
              comments: {
                $unshift: [newComment],
              },
            },
          });
        },
       },
    })
    this.setState({
      input: ""
    })
  }

  render() {
    console.log(this.state.input)
    return (
      <div className="main">
        <input className="input-field" onChange={this.handleChange.bind(this)} value={this.state.input}></input>
        <button className="comment-button" onClick={this.inputValue.bind(this)}>ADD COMMENT</button>
      </div>
    )
  }
}

const myQuery = gql`
  mutation createComponent($name: String!) {
    createComment(name: $name) {
      id
      name
	  }
  }
`;

export default graphql(myQuery)(Comment)