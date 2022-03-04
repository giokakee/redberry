let initialSkills = [
    {title: 'HTML', experience: '2', id: 1},
    {title: 'CSS', experience: '1', id: 2}
]


const skillsReducer = (state = initialSkills, action) => {
    switch(action.type){
        case 'add':
            let existedSkill = state.find(s => s.title === action.data.title )
            if(existedSkill){
                return state
            }else{
                return [...state, {...action.data, id: state.length +1}]
            }
        case 'delete':
            return state.filter(s => s.id !== action.data)
        default:
            return state
    }
} 



export const add = ({data}) => {
    return dispatch => {
        dispatch({
            type: 'add',
            data
        })
    }
}

export const deleteSkill = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'delete',
            data: id
        })
    }
}

export default skillsReducer
