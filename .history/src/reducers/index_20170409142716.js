const initialState = 6660;

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
