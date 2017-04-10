const initialState = 0;

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "vitalik": {
            return state + action.do
        }

        default: {
            return state
        }
                
    }
}

export default reducer;
