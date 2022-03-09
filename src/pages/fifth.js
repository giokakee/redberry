import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../style/submitPage.css'



const Fifth = () => {
    const navigate = useNavigate()


let first = JSON.parse(window.localStorage.getItem('firstPage'));
let second = JSON.parse(window.localStorage.getItem('secondPage'));
let third = JSON.parse(window.localStorage.getItem('thirdPage'));
let fourth = JSON.parse(window.localStorage.getItem('fourthPage'));


second = second.map(mp => {
    return {...mp, experience: Number(mp.experience)}
})

third = {...third, had_covid: third.had_covid === 'true'}
third = {...third, had_covid_at: third.had_covid ? third.had_covid_at : '2022-03-15'}
third = {...third, vaccinated: third.vaccinated === 'true'}
third = {...third, vaccinated_at: third.vaccinated ? third.vaccinated_at : '2022-03-15'}

fourth = {...fourth, will_organize_devtalk: fourth.will_organize_devtalk === 'true'}

let user = {token: '46126f59-8cda-4009-80dd-21ce2386f36a', ...first, ...{skills: second}, ...third, ...fourth}

  


const submit = async () => {
    try {
    let data =  await axios.post('https://bootcamp-2022.devtest.ge/api/application', user)
    console.log(data)
    navigate('/6')
    setTimeout(() => {
        navigate('/')
        window.localStorage.clear()
    }, 3000)
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



    export default Fifth