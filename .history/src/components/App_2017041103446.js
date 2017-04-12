import '../App.css';

import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { compose } from 'react-apollo';
import { connect } from 'react-redux';

// import React from 'react';



// import { connect } from 'react-redux';

// function AdGroup(props) {
//   console.log(email)
//   // const adsComponents = ads.map(ad => {
//   //   return <div>Weit please</div>
//   // })
//   return (
//     <div>
//       <li>
//         {id} {" "}
//         {email} {" "}
//         {name} {" "}
//       </li>
//     </div>
//   )
// }

function PostList({ data: { loading, adGroups } }) {
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <ul>
        {adGroups.map((group, index) => 
          <App key={index} {...group} />
        )}
      </ul>
    );
  }
}


class App extends Component {
  // constructor(props) {
    // super(props)
    // const state = props.id 
  // }

  add() {
    const five = 5;
    console.log(this.props.addValue(five))
  }
  
  render() {
    // console.log('INITIAL StoreState this: ',this.props.testStore)
    // if (loading) {
      // return <div>Loading</div>;
    // } else {
      const {id, name, email} = this.props;
      // return (
      //   <ul>
      //     {adGroups.map(group => 
      //       <AdGroup {...group} />
      //     )}
      //     {id} {name} {email}
      //   </ul>
      // );
  // }
    return (
      <div>
        <p className="App-intro">
          Hello world
        </p>
        <button value="23"
          onClick={this.add.bind(this)}
        > add Five to store
        </button>
        {id} {name} {email}
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
    }),
    
    dispatch => ({
      addValue: (value) => {
        dispatch({type: 'vitalik', do: value})
      }
    })
  ),

  graphql(myQuery)
)(App)
