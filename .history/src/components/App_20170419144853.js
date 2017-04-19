import '../App.css';

import { gql, graphql } from 'react-apollo';

import Comment from './Comment';
import PostLists from './PostLists';
import React from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';

function App({email , data: { loading, allComments } }) {
  // console.log('Value TestStore', this.name)
  if (loading) {
    return <div>Loading</div>;
  } else {
    console.log("DATA COMMENT: ", allComments);
    console.log("This props.email: ", email);
    const name1 = name.push(this.props.email)}
    return (
      <div>
        <Comment />
        <ol>
            { allComments.map((name1, index) => 
                <div key={index}>
                    <PostLists { ...name1 } />
                </div>
            )}
        </ol>
      </div>
    );
  }
}

const myQuery =  gql`
  query Comments {
    allComments {
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
