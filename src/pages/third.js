import '../style/third.css'
import LinkCircles from '../linkCircles';
import { useState } from 'react';

const Third = () => {
    const [radioInputs, setRadioInputs] = useState({
        work_preference: '',
        had_covid: '',
        had_covid_at: '',
        vaccinated: '',
        vaccinated_at: ''
    })


    const submit = (e) => {
        e.preventDefault()

console.log(document.querySelector('.dateVaccinated'))

    }


        return(
            <div className="container">
                <div className="formDiv"> 
                    <div className="title">
                        <p>Covid Stuff</p>
                    </div>
                    <form style={{width: '645px'}} onSubmit={submit}>
                    <div className="thirdPageDiv">
                        <p>how would you prefer wo work?</p>
                        <div>
                            <input onChange={({target}) => setRadioInputs({...radioInputs, work_preference: target.value}) }  type='radio' name='prefferToWork' value={'From Sairme office'} />
                            <label>From Sairme Offic</label>
                        </div>
                        <div>
                            <input onChange={({target}) => setRadioInputs({...radioInputs, work_preference: target.value}) } required type='radio' name='prefferToWork' value={'From Home'} />
                            <label>From Home</label>
                        </div>
                        <div>
                            <input onChange={({target}) => setRadioInputs({...radioInputs, work_preference: target.value}) } required type='radio' name='prefferToWork' value={'Hybrid'} />
                            <label>Hybrid</label>
                        </div>
                    </div>
                    <div className="thirdPageDiv">
                        <p>Did you contact covid 19? :(</p>
                            <div>
                               <input onChange={({target}) => setRadioInputs({...radioInputs, had_covid: target.value})} required type='radio' name='covidContact' value={true} />
                               <label>Yes</label>   
                            </div>
                            <div>
                                <input onChange={({target}) => setRadioInputs({...radioInputs, had_covid: target.value})} required type='radio' name='covidContact' value={''} />
                                <label>No</label> 
                            </div>
                    </div>
                    <div className="thirdPageDiv">
                        <p>When?</p>
                        {radioInputs.had_covid ? <input onChange={({target}) => setRadioInputs({...radioInputs,had_covid_at: target.value})}  type='date'/>
                                                : <input disabled type='date' />}
                    </div>
                    <div className="thirdPageDiv">
                        <p>Have you been vaccinated?</p>
                            <div>
                              <input onChange={({target}) => setRadioInputs({...radioInputs, vaccinated: target.value})} required type='radio' name='haveVaccinated' value={true} />
                              <label>Yes</label>  
                            </div>
                            <div>
                               <input onChange={({target}) => setRadioInputs({...radioInputs, vaccinated: target.value})} required type='radio' name='haveVaccinated' value={''} />
                                <label>No</label> 
                            </div>
                    </div>
                    <div className="thirdPageDiv">
                        <p>When did you get your last covid vaccine?</p>
                        {radioInputs.vaccinated   ? <input className='dateVaccinated' onChange={({target}) => setRadioInputs({...radioInputs, vaccinated_at: target.value}) }  type='date'/>
                                                  : <input disabled type='date' />}
                    </div>
                    <button type='submit' style={{display: 'none'}}></button>
                    </form>
                    <div className='' >
                        <LinkCircles current={3} />
                    </div>
                </div>
                <div className="infoDiv">
                    <div className='infoTitle'>
                        <p>Redberry Covid Policies</p>
                    </div>
                    <div className='infoText'>
                        <p>
                            As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications {'>'} Zoom meetings. Both on the fun and productivity scales.                      
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    


    export default Third