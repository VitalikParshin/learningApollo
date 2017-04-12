const initialState = 0;

const auth = (state=initialState, action) => {
    switch(action.type) {
        case "vitalik": {
            return state + action.do
        }

        default: {
            return state
        }
                
    }
}

export default auth;
