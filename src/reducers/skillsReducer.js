let skills = [
 {id: 1, title: 'HTML'},
 {id: 2, title: 'CSS'},
 {id: 3, title: 'PHP'},
 {id: 4, title: 'Laravel'},
 {id: 5, title: 'React.JS'},
 {id: 6, title: 'Vue.JS'},
 {id: 7, title: 'Svelte'},
 {id: 8, title: 'Angular'}
]


let skillssFromStrage = window.localStorage.getItem('secondPage')
skillssFromStrage = JSON.parse(skillssFromStrage).map(mp => {
    return {...mp, title: skills.find(f => f.id === mp.id).title}
})

let initialSkills = skillssFromStrage || [
    {title: 'HTML', experience: '2', id: 1},
    {title: 'CSS', experience: '1', id: 2}
]


const skillsReducer = (state = initialSkills, action) => {
    switch(action.type){
        case 'add':
            let existedSkill = state.find(s => s.title === action.data.title)
            if(existedSkill){
                if(existedSkill.experience===action.data.experience){
                    return state
                }else{
                    existedSkill = {...existedSkill, experience: action.data.experience}
                    return state.map(mp => mp.id === existedSkill.id ? existedSkill : mp)
                }
            }else{
                return [...state, {...action.data, id:  skills.find(f => f.title === action.data.title).id}]
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
