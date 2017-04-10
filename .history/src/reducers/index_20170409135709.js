const initialState = 0;
const action = {
    type: 'vitalik',
    
}

const reduser = (state=initialState, action) => {
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
