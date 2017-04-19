const email = { 
    profile: {
        email: 'artem@serga.name'
    }
};

const auth = (state=email, action) => {
    switch(action.type) {
        case "ADD": {
            return state.profile.email + action.do
        }

        default: {
            return state
        }
                
    }
}

export default auth;
