
const counterReducer = (state,action) => {
    
    switch (action) {
        case 'INCREMENT':
            return state = state + 1;
            break;
        case 'DECREMENT':
            return state = state -1 ;
        default:
            break;
    }
}

export default counterReducer;