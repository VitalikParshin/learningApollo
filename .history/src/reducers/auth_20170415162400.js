const email = { 
    profile: {
        email: 'v'
    }
};

const auth = (state=email, action) => {
    switch(action.type) {
        case "ADD": {
            let newState = Object.assign(state, {})
            newState.profile.email += action.do
            return newState
        }

        default: {
            return state
        }
                
    }
}

export default auth;
