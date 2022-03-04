import { useNavigate } from 'react-router-dom'
import '../style/openingPage.css'



const OpeningPage = () => {

const navigate = useNavigate();


    return(
        <div className="openingPage">
            <div className='welcomeRocketeer'></div>
            <div className='startQuestions' onClick={() => navigate('/1')}>
                <p>Start Questionnaire</p>
            </div>
            <p style={{textDecoration: 'underline'}}>Submitted Applications</p>
            <div className='cosmonaut'></div>
        </div>
    )
}


export default OpeningPage