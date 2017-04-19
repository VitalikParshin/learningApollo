import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { connect } from 'react-redux';

class PostLists extends Component {

  addComment() {
    const hello = "hello World";
    console.log('function is working', hello);
    // this.props.addValue(hello)
  }
  
  render() {
    // console.log('INITIAL StoreState is: ', this.props.email)
    const { id, name } = this.props;
    return (
      <ol>
        <li>
          <a>{name} </a>
        </li>
      </ol>
    );
  }
}

const myQuery =  gql`
  query Comments {
    allCommentses {
      id
      name
    }
  }
`;


export default PostLists;
// export default connect(
//   state => ({
//     // email: state.auth.profile.email
//   }),
    
//   dispatch => ({
//     addValue: (value) => {
//       dispatch({type: 'ADD', do: value})
//     }
//   })
// )(Post);



