// import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers'
import axios from 'axios'
// import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../style/submitPage.css'



const Fifth = ({userInfo}) => {
    const navigate = useNavigate()
    // const [userInfo, setUserInfo] = useState([])

console.log(userInfo)

let first = JSON.parse(window.localStorage.getItem('firstPage'));
let second = JSON.parse(window.localStorage.getItem('secondPage'));
let third = JSON.parse(window.localStorage.getItem('thirdPage'));
let fourth = JSON.parse(window.localStorage.getItem('fourthPage'));


second = second.map(mp => {
    return {...mp, experience: Number(mp.experience)}
})
third = {...third, vaccinated: Boolean(third.vaccinated)}
third = {...third, had_covid: Boolean(third.had_covid)}
fourth = {...fourth, will_organize_devtalk: Boolean(fourth.will_organize_devtalk)}

let user = {token: '46126f59-8cda-4009-80dd-21ce2386f36a', ...first, ...{skills: second}, ...third, ...fourth}


  

  console.log(user)

const submit = async () => {
    try {
    let data =  await axios.post('https://bootcamp-2022.devtest.ge/api/application', user)
    console.log(data)
    window.localStorage.clear()
    navigate('/')
    }catch(err){
        console.log({
            message: err.message
        })
    }
}
 
        return(
            <div className='submitPage'>
                <div >
                    <p onClick={submit} style={{cursor: 'pointer'}}>Submit</p>
                </div>
                <p onClick={() => navigate('/4') } style={{textDecoration: 'underline'}}>go back</p>
            </div>
        )
    }


const mapStateToProps = (state) => {

    return {
        userInfo:  'zimbabue'
    }
}
    


    export default connect(mapStateToProps)(Fifth)