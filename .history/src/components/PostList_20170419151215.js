import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { connect } from 'react-redux';

class PostList extends Component {
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

export default PostList;
