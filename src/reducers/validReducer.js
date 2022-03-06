
    let first = window.localStorage.getItem('firstPage');
    let second = window.localStorage.getItem('secondPage');
    let third = window.localStorage.getItem('thirdPage');
    let fourth = window.localStorage.getItem('fourthPage');
    let fifth = window.localStorage.getItem('fifthPage');



let initialState = {
    first: first ? true : false,
    second: second ? true : false,
    third: third  ? true : false,
    fourth: fourth ? true : false,
    fifth: fifth ? true : false
}

// let initialState = {
//     first: first || false,
//     second: second || false,
//     third: third  || false,
//     fourth: fourth || false,
//     fifth: fifth || false
// }

const validReducer = (state = initialState, action) => {
    switch(action.type){
        case 'first':
            console.log(action.data)
            return {...state, first: action.data }
        case 'second':
            return {...state, second: action.data}
        case 'third':
            return {...state, third: action.data }
        case 'fourth':
            return {...state, fourth: action.data}
        case 'fifth':
            return {...state, fifth: action.data }
        default:
            return state
    }
}


export const firstChange = (data) => {
    return dispatch => {
        dispatch({
            type: 'first',
            data
        })
    }
}

export const secondChange = (data) => {
    return dispatch => {
        dispatch({
            type: 'second',
            data
        })
    }
}
export const thirdChange = (data) => {
    return dispatch => {
        dispatch({
            type: 'third',
            data
        })
    }
}
export const fourthChange = (data) => {
    return dispatch => {
        dispatch({
            type: 'fourth',
            data
        })
    }
}
export const fifthChange = (data) => {
    return dispatch => {
        dispatch({
            type: 'fifth',
            data
        })
    }
}



export default validReducer
