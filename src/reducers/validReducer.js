let initialState = {
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false
}

const validReducer = (state = initialState, action) => {
    switch(action.type){
        case 'first':
            return {...state, first: action.data }
        case 'second':
            return {...state, second: action.data}
        case 'third':
            return {...state, first: action.data }
        case 'fourth':
            return {...state, second: action.data}
        case 'fifth':
            return {...state, first: action.data }
        default:
            return state
    }
}


export const firstChange = ({data}) => {
    return dispatch => {
        dispatch({
            type: 'first',
            data
        })
    }
}

export const secondChange = ({data}) => {
    return dispatch => {
        dispatch({
            type: 'second',
            data
        })
    }
}
export const thirdChange = ({data}) => {
    return dispatch => {
        dispatch({
            type: 'third',
            data
        })
    }
}
export const fourthChange = ({data}) => {
    return dispatch => {
        dispatch({
            type: 'fourth',
            data
        })
    }
}
export const fifthChange = ({data}) => {
    return dispatch => {
        dispatch({
            type: 'fifth',
            data
        })
    }
}



export default validReducer
