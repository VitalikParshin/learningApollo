const email = { 
    profile: {
        email: 'vitalik.parshin@gmail.com'
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
