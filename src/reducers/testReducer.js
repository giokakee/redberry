


export const testReducer = (state = 0, action) => {
    switch(action.type){
        case 'inc':
            return state + 1
        case 'dec':
            return state - 1
        case 'zero': 
            return 0
        default:
            return state
    }
}



