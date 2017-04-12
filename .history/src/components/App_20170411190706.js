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
class App extends Component {
  // constructor(props) {
    // super(props)
    // const state = props.id 
  // }

  add() {
    const five = 5;
    console.log("This function is working")
    console.log("next state : ", this.props.addValue(five))


  }
  
  render() {
    console.log('INITIAL StoreState is: ', this.props.t)
    const {id, name, email} = this.props.g;
      
    return (
      <div>
        <li>
          {id} 
          {name} 
          {email}
        </li>

        <button value="23"
          onClick={this.add.bind(this)}
        > add Five to store
        </button>
      </div>
    );
  }
}

function PostList({ data: { loading, adGroups, testStore } }) {
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <p className="App-intro">
          Hello world
        </p>
        <ul>
          {adGroups.map((group, index) => 
            <App key={index} g={...group} t={...testStore}/>
          )}
        </ul>
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
        dispatch({type: 'ADD', do: value})
      }
    })
  ),

  graphql(myQuery)
)(PostList)
