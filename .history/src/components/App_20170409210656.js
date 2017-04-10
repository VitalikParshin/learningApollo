import '../App.css';

import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { connect } from 'react-redux';

function PostList({ data: { loading, adGroups } }) {
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <ul>
        {adGroups.map(group => 
          <AdGroup {...group} />
        )}
      </ul>
    );
  }
}

// class App extends Component {
//   add() {
//     const five = 5;
//       console.log(this.props.addDo(five))
//   }
  
//   render() {
//     console.log('INITIAL StoreState this: ',this.props.testStore)
//     return (
//       <div>
//         <p className="App-intro">
//           Hello world
//         </p>
//         <button value="23"
//           onClick={this.add.bind(this)}
//         > add Five to store
//         </button>
//         {this.props.}
//       </div>
//     );
//   }
// }

// export default connect(
//   state => ({
//     testStore: state
//   }),

//   dispatch => ({
//     addDo: (value) => {
//       dispatch({type: 'vitalik', do: value})
//     }
//   })
// )(App);

export default graphql(gql`
  query allGroups{
    adGroups(email: "artem@serga.name") {
      id
      email
      name
      ads {
        id
        headline
      }
    }
  }
`)(App);
