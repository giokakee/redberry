import '../style/fourth.css'
import LinkCircles from '../linkCircles';
import { useEffect, useState } from 'react';
import { fourthChange } from '../reducers/validReducer';
import { connect } from 'react-redux';

const Third = ({fourthChange}) => {
    const [inputs, setInputs] = useState({
        will_organize_devtalk: '',
        devtalk_topic: '',
        something_special: ''
    })

    useEffect(() => {
        let initialInputs = window.localStorage.getItem('fourthPage')
        if(initialInputs){
            setInputs(JSON.parse(initialInputs))
        }
    }, [])

    let {will_organize_devtalk, devtalk_topic, something_special} = inputs

    let valid = will_organize_devtalk.length > 0 && devtalk_topic.length > 1 && something_special.length > 1

    useEffect(() => {
        fourthChange(valid)
        if(valid){
            window.localStorage.setItem('fourthPage', JSON.stringify(inputs))
        }else{
            window.localStorage.removeItem('fourthPage')
        }
    }, [valid, fourthChange, inputs])
    const submit = (e) => {
        e.preventDefault()

    }

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
                                <input checked={inputs.will_organize_devtalk === 'true' ? true : false } type='radio' value={true} name='organize' onChange={({target}) => setInputs({...inputs, will_organize_devtalk: target.value})}/>
                                <label >Yes</label>
                            </div>
                            <div>
                                <input checked={inputs.will_organize_devtalk === 'false' ? true : false } type='radio' value={false} name='organize' onChange={({target}) => setInputs({...inputs, will_organize_devtalk: target.value})}/>
                                <label>No</label>
                            </div>
                        </div>
                        <div style={{marginBottom: '35px'}}>
                            <p>What would you speak about at Devtalk?</p>
                            <textarea value={inputs.devtalk_topic} placeholder='I would...' onChange={({target}) => setInputs({...inputs, devtalk_topic: target.value})}  />
                        </div>  
                        <div>
                            <p>Tell us something soecual</p>
                            <textarea value={inputs.something_special} style={{marginBottom: '85px', minHeight: '89px'}} placeholder='I...' onChange={({target}) => setInputs({...inputs, something_special: target.value})} />
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
    

    const mapDispatchToProps = (dispatch) => {
        return {
            fourthChange: (data) => {
                dispatch(fourthChange(data))
            }            
        }
    }

    export default connect(null, mapDispatchToProps)(Third);