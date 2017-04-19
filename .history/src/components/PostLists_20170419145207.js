import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { connect } from 'react-redux';

class PostLists extends Component {
  render() {
    // console.log('INITIAL StoreState is: ', this.props.email)
    const { id, name } = this.props;
    return (
      <div>
        <li>
          <a>{name} </a>
        </li>
      </div>
    );
  }
}

// const myQuery =  gql`
//   query Comments {
//     allCommentses {
//       id
//       name
//     }
//   }
// `;


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



