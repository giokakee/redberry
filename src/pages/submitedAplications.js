import axios from 'axios'
import { useEffect, useState } from 'react'
import '../style/submitedApps.css'
import SubmitedPerson from "./submittedList/submitedPerson"


const SubmitedApps = () => {
    let [applications, setApplications] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                let {data} = await axios.get('https://bootcamp-2022.devtest.ge/api/applications?token=46126f59-8cda-4009-80dd-21ce2386f36a')
                    setApplications(data)
            }catch(err){
                console.log({message: err.message})
            }
        }
        fetchData()
    },[])




    return(
        <div className='main'>
            <p className="subHeader">Submitted Applications</p>
            <div>
                {applications.map((mp, index) => {
                                    return(
                                        <SubmitedPerson key={index} num={index+1}  personInfo={mp} />
                                    )
                                })}
            </div>
        </div>
    )
}


export default SubmitedApps