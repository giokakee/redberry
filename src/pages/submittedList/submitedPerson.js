import '../../style/submitedApps.css'
import { useEffect, useState } from "react"
import axios from 'axios'



const SubmitedPerson = ({personInfo, num}) => {
    const [showMore, setShowMore] = useState(false)
    const [chosenSkills, setChosenSkills] = useState([])
    useEffect(() => {
        const getSkills = async() => {
            try{
                let {data} = await axios.get('https://bootcamp-2022.devtest.ge/api/skills')
                let forShow = personInfo.skills.map(mp => {
                    return {
                        experience: mp.experience,
                        title: data.find(f => f.id === mp.id ).title,
                        id: mp.id
                    }
                })
                setChosenSkills(forShow)
            }catch(err){
                console.log({message: err.message})
            }
        }
        getSkills();
    }, [personInfo.skills])



    return(
        <div  className={`${showMore ? 'show' : 'notShow'}`} >
            <div className='topSide' onClick={() => setShowMore(!showMore)}>
                <p>{num}</p>
                <div className='arrow'></div>
            </div>

            <div className={`${showMore ? 'userInfo' : 'nonDisplay' }`}>
                <div className='appInfoDiv'>
                    <p className='appTitle'>Personal Information</p>
                    <div>
                        <p><span>First Name </span><span>{personInfo.first_name}</span></p>
                        <p><span>Last Name</span> <span>{personInfo.last_name}</span> </p>
                        <p><span>E Mail </span><span>{personInfo.email}</span></p>
                        <p><span>Phone </span><span>{personInfo.phone}</span></p>
                    </div>
                </div>
                <div className='appInfoDiv'>
                    <p className='appTitle'>Skillset</p>
                    <div className='appInfoDiv'>
                        {chosenSkills.map(mp => {
                            return(
                                <div key={mp.id} className='appSkills'>
                                    <p>{mp.title}</p>
                                    <p>Years of experience: {mp.experience}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='appInfoDiv'>
                    <p className='appTitle'>Covid Situation</p>
                    <div className='appInfoDiv'>
                        <p>How would you prefer to work</p>
                            <div>
                                <div>
                                    <input type='radio' disabled defaultChecked={personInfo.work_preference === 'from_sairme_office' ? true : false}  />
                                    <label>From Sairme Office</label>
                                </div>
                                <div>
                                    <input type='radio'   disabled defaultChecked={personInfo.work_preference === 'from_home' ? true : false} />
                                    <label>From Home</label>
                                </div>
                                <div>
                                    <input type='radio'  disabled  defaultChecked={personInfo.work_preference === 'hybrid' ? true : false}/>
                                    <label>Hybrid</label>
                                </div>
                            </div>

                        <p>Did you have covid 19?</p>
                        <div>
                            <div>
                                 <input type='radio'  disabled defaultChecked={personInfo.had_covid  ? true : false}  />
                                 <label>Yes</label>
                             </div>
                              <div>
                                  
                                 <input type='radio'  disabled defaultChecked={personInfo.work_preference ? false : true} />
                                 <label>No</label>
                              </div>
                        </div>
                        <p>When did you have covid 19</p>
                        {personInfo.had_covid ? 
                        <input type='date' value={personInfo.had_covid_at}  disabled/> :
                        <input type='date' disabbled />}
                        <p>Have you been vaccinated</p>
                        <div>
                            <div>
                                 <input type='radio'  disabled defaultChecked={personInfo.vaccinated  ? true : false}  />
                                 <label>Yes</label>
                             </div>
                              <div>
                                  
                                 <input type='radio'  disabled defaultChecked={personInfo.vaccinated ? false : true} />
                                 <label>No</label>
                              </div>
                        </div>
                        <p>When have you get covid vaccine?</p>
                        {personInfo.vaccinated ? 
                        <input type='date' value={personInfo.vaccinated_at}  disabled/> :
                        <input type='date' disabbled />}
                    </div>
                </div>
                <div className='appInfoDiv'>
                    <p className='appTitle'>Insights</p>
                    <p>would you attend Devtalks and maybe also organize your own</p>
                        <div>
                           <input type='radio'  disabled defaultChecked={personInfo.will_organize_devtalk  ? true : false}  />
                           <label>Yes</label>
                         </div>
                          <div>                      
                            <input type='radio'  disabled defaultChecked={personInfo.will_organize_devtalk ? false : true} />
                            <label>No</label>
                         </div>
                    <p>What would you speak about at Devtalk</p>
                    <textarea disabled>{personInfo.devtalk_topic}</textarea>
                    <p>Tell us something special</p>
                    <textarea disabled>{personInfo.something_special}</textarea>
                </div>
            </div>
        </div>
    )
} 



export default SubmitedPerson