import React, {Component} from 'react';

class Comment extends Component {
  state = {
    input: ""
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  inputValue() {
    const name = this.state.input
    this.props.mutate({variables:{name}})
  }

  render() {
    console.log(this.state.input)
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} value={this.state.input}></input>
        <button onClick={this.inputValue.bind(this)}>ADD COMMENT</button>
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