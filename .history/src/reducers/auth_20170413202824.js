const email = "artem@serga.name" ;

const auth = (state=email, action) => {
    switch(action.type) {
        case "ADD": {
            return state + action.do
        }

        default: {
            return state
        }
                
    }
}

export default auth;
