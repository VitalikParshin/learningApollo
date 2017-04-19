import '../App.css';

import { gql, graphql } from 'react-apollo';

import Comment from './Comment';
import Post from './Post'
import PostLists from './PostLists';
import React from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';

function App({email , data: { loading, allCommentses } }) {


  
  // console.log('Value TestStore', this.name)
  if (loading) {
    return <div>Loading</div>;
  } else {
    const comment = allCommentses[0].name
    console.log("DATA COMMENT: ", comment);
    return (
      <div>
        { allCommentses.map((name, index) => 
            <div>
                <Comment />
                <PostLists { ...name } />
            </div>
        )}
        
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
)(App)
