import '../App.css';

import { gql, graphql } from 'react-apollo';

import Post from './Post'
import React from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';

function PostList({email , data: { loading, allCommentses } }) {
  // console.log('Value TestStore', this.name)
  if (loading) {
    return <div>Loading</div>;
  } else {
    console.log("DATA COMMENT: ", allCommentses);
    return (
      <div>
        <p className="App-intro">
          Hello world
        </p>
        <ul>
          { allCommentses.map((name) => 
              <li> {name } </li>
          )}
        </ul>
        
      </div>
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


export default compose(
  connect(
    state => ({ 
      email: state.auth.profile.email
    })
  ),
  graphql(myQuery 
  // {
  //   options:({ email }) => {
  //     return { variables: { email } }
  //   }}
  )
)(PostList)
