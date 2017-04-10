import '../App.css';

import { gql, graphql } from 'react-apollo';

import React from 'react';

import React, { Component } from 'react';


// import { connect } from 'react-redux';

function AdGroup({id, email, name}) {
  console.log(email)
  // const adsComponents = ads.map(ad => {
  //   return <div>Weit please</div>
  // })
  return (
    <div>
    <ul>
      <li>
        {id}
        {email}
        {name}
        
      </li>
    </ul>
    </div>
  )
}

// function PostList({ data: { loading, adGroups } }) {
//   if (loading) {
//     return <div>Loading</div>;
//   } else {
//     return (
//       <ul>
//         {adGroups.map(group => 
//           <AdGroup {...group} />
//         )}
//       </ul>
//     );
//   }
// }


class App extends Component {
  add() {
    const five = 5;
      console.log(this.props.addValue(five))
  }
  
  render({ data: { loading, adGroups } }) {
    console.log('INITIAL StoreState this: ',this.props.testStore)
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
  //   return (
  //     <div>
  //       <p className="App-intro">
  //         Hello world
  //       </p>
  //       <button value="23"
  //         onClick={this.add.bind(this)}
  //       > add Five to store
  //       </button>
  //       {adGroups.map(group => 
  //         <AdGroup {...group} />
  //       )}
  //     </div>
  //   );
  // }
// }

// export default connect(
//   state => ({
//     testStore: state
//   }),

//   dispatch => ({
//     addValue: (value) => {
//       dispatch({type: 'vitalik', do: value})
//     }
//   })
// )(App);

const myQuery =  gql`
  query allGroups{
    adGroups(email: "artem@serga.name") {
      id
      email
      name
    }
  }
`;

const ComponentWithData = graphql(myQuery)(App)

export default ComponentWithData;
