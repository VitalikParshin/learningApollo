const initialState = 0;

const reduser = (state=initialState, actions) => {
    switch(action.type) {
        case "vitalik": {
            return state+1
        }

        default: {
            return state
        }
                
    }
}

export default reduser;
