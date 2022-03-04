import { useNavigate } from 'react-router-dom'
import '../style/submitPage.css'



const Fifth = () => {
    const navigate = useNavigate()
        return(
            <div className='submitPage'>
                <div >
                    <p>Submit</p>
                </div>
                <p onClick={() => navigate('/4') } style={{textDecoration: 'underline'}}>go back</p>
            </div>
        )
    }
    


    export default Fifth