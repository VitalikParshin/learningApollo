import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';

class Index extends Component {
    constructor(...args) {
        super()

    }

    render(){
        return(
            <div>Hello Vitalik Parshin</div>
        )
    }

}

export default Index;










// class App extends Component {
//   constructor(...args) {
//     super(...args);

//     const networkInterface = createNetworkInterface('http://localhost:3010/graphql');
//     this.client = new ApolloClient({
//       networkInterface,
//       dataIdFromObject: r => r.id
//     });
//     // console.log("dataID ", this.client.dataIdFromObject)
//     // console.log("network Interface ", networkInterface)
//   }
  
//   render() {
//     return (
//       <ApolloProvider client={this.client}>
//         <PostList />
//       </ApolloProvider>
//     );
//   }
// }

// export default App;