import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import ComponentWithData from './App';

// import App from './App';


// const networkInterface = createNetworkInterface({uri: 'http://localhost:3010/graphql'});
// const client = new ApolloClient({networkInterface: networkInterface});


const networkInterface = createNetworkInterface({uri: 'http://localhost:3010/graphql'});
client = new ApolloClient({ networkInterface : networkInterface});

class Index extends Component {
    
        
    

    render() {
        
        return(
            <ApolloProvider client={client}>
                <ComponentWithData />
            </ApolloProvider>
        )
    }
}

export default Index;









// class Index extends Component {
//     constructor(...args) {
//         super(...args);

//         const networkInterface = createNetworkInterface({uri: 'http://localhost:3010/graphql'});
//         this.client = new ApolloClient({
//             networkInterface,
//             dataIdFromObject: r => r.id
//         });
//     }

//     render() {
//         return(
//             <ApolloProvider client={this.client}>
//                 <ComponentWithData />
//             </ApolloProvider>
//         )
//     }
// }

// export default Index;