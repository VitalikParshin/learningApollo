import '../App.css';

import { gql, graphql } from 'react-apollo';

import Post from './Post'
import React from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';

function PostList({email , data: { loading, allAdGroups } }) {
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
          { allAdGroups.map((group, index) => 
            <Post key={index} {...group}/>
          )}
        </ul>
        {/* <div>{email}</div>*/ }
      </div>
    );
  }
}
// const artemEmail = 'artem@serga.name'
const myQuery =  gql`
  query allAdGroups {
    allAdGroups(filter: {email: "vitalik.parshin@gmail.com"}) {
      id
      email
      name
    }
  }
`;

// const myQuery =  gql`
//   query allAdGroups($email: String!) {
//     allAdGroups(email: $email) {
//       id
//       email
//       name
//     }
//   }
// `;
export default compose(
  connect(
    state => ({ 
    })
  ),
  graphql(myQuery, {
    options:({ email }) => {
      return { variables: { email } }
    }
  }),
)(PostList)
