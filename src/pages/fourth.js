import '../style/fourth.css'
import LinkCircles from '../linkCircles';
import { useState } from 'react';

const Third = () => {
    const [inputs, setInputs] = useState({
        will_organize_devtalk: '',
        devtalk_topic: '',
        something_special: ''
    })


    const submit = (e) => {
        e.preventDefault()

    }
console.log(inputs)

        return(
            <div className="container">
                <div className="formDiv">
                    <div className="title">
                        <p>What about you?</p>
                    </div>
                    <form onSubmit={submit}>
                        <div style={{marginBottom: '45px'}} className='fourthPageDiv'> 
                            <p>Would you attend Devtalks and maybe also organize your own?</p>    
                            <div>
                                <input type='radio' value={true} name='organize' onChange={({target}) => setInputs({...inputs, will_organize_devtalk: target.value})}/>
                                <label >Yes</label>
                            </div>
                            <div>
                                <input type='radio' value={''} name='organize' onChange={({target}) => setInputs({...inputs, will_organize_devtalk: target.value})}/>
                                <label>No</label>
                            </div>
                        </div>
                        <div style={{marginBottom: '35px'}}>
                            <p>What would you speak about at Devtalk?</p>
                            <textarea placeholder='I would...' onChange={({target}) => setInputs({...inputs, devtalk_topic: target.value})}  />
                        </div>  
                        <div>
                            <p>Tell us something soecual</p>
                            <textarea style={{marginBottom: '85px', minHeight: '89px'}} placeholder='I...' onChange={({target}) => setInputs({...inputs, something_special: target.value})} />
                        </div>  
                        <button type='submit' style={{display: 'none'}}></button>             
                    </form>
                    <div className='' >
                       <LinkCircles current={4} />
                    </div>
                </div>
                <div className="infoDiv">
                    <div className='infoTitle'>
                        <p>Redberrian Insights</p>
                    </div>
                    <div className='infoText'>
                        <p>
                        We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!                    
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    


    export default Third