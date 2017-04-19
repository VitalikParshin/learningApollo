import '../App.css';

import { gql, graphql } from 'react-apollo';

import Post from './Post'
import React from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';

function PostList({email , data: { loading, adGroups } }) {
  // console.log('Value TestStore', this.name)
  if (loading) {
    return <div>Loading</div>;
  } else {
    console.log("DATA IS ", loading);
    return (
      <div>
        <p className="App-intro">
          Hello world
        </p>
        <ul>
          { adGroups.map((group, index) => 
            <Post key={index} {...group}/>
          )}
        </ul>
        <div>sldjsldflsj{email}</div>
      </div>
    );
  }
}
// const artemEmail = 'artem@serga.name'
const myQuery =  gql`
  query allGroups($email: String!) {
    adGroups(email: $email) {
      id
      email
      name
    }
  }
`;


export default compose(
  connect(
    state => { 
      console.log(state.auth);
      return {
        email: state.auth
      }
    }
  ),
  graphql(myQuery, {
    // options:(props) => ({ variables: {email: props.testStore} }) }),
    options:({ email }) => {
      return { variables: { email } }
    }
  }),
)(PostList)
