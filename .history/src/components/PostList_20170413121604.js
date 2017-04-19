import '../App.css';

import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import Post from './Post'
import { compose } from 'react-apollo';
import { connect } from 'react-redux';

// const emailName = this.props.testStore;
// console.log('emailName', emailName)


function PostList({ data: { loading, adGroups } }) {
  if (loading) {
    return <div>Loading</div>;
  } else {
    console.log("DATA IS ")
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
        <div>{this.props.testStore}</div>
      </div>
    );
  }
}

const myQuery =  gql`
  query allGroups{
    adGroups(email: "artem@serga.name") {
      id
      email
      name
    }
  }
`;


export default compose(
  connect(
    state => ({
      testStore: state.auth
    })
  ),
  graphql(myQuery),
)(PostList)
