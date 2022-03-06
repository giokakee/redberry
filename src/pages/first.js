import '../style/first.css'
import LinkCircles from '../linkCircles';
import { useEffect, useState } from 'react';
import { firstChange } from '../reducers/validReducer';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const First = ({firstChange}) => {
    const [inputs, setInputs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
    })
    
    let regexMail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexMobile = /995/;
    const valid = inputs.first_name.length > 2 && inputs.last_name.length > 2 && regexMobile.test(inputs.phone) && regexMail.test(inputs.email)
    
    useEffect(() => {
    let initialInputs = window.localStorage.getItem('firstPage')
    if(initialInputs){
        setInputs(JSON.parse(initialInputs))
    }
    }, [])


    useEffect(() => {
        firstChange(valid)
        if(valid){
            window.localStorage.setItem('firstPage', JSON.stringify(inputs))
        }else{
            window.localStorage.removeItem('firstPage')
        }
    }, [valid, firstChange, inputs])
    

const navigate = useNavigate();
const submit = (e) => {
    e.preventDefault()
    firstChange(valid)
    if(valid){
        window.localStorage.setItem('firstPage', JSON.stringify(inputs))
        navigate('/2')
    }else{
        window.localStorage.removeItem('firstPage')
    }
    
}


return(
    <div className="container">
                <form className="formDiv" onSubmit={submit}>
                    <div className="title">
                        <p>Hey, Rocketeer, what are your coordinates?</p>
                    </div>
                    <div className="form">
                        <input value={inputs.first_name} onChange={({target}) => setInputs({...inputs, first_name: target.value})} type='text' placeholder="First Name" required />
                        <input value={inputs.last_name} onChange={({target}) => setInputs({...inputs, last_name: target.value})} type='text' placeholder="Last Name" />
                        <input value={inputs.email} onChange={({target}) => setInputs({...inputs, email: target.value})} type='text' placeholder="E Mail"/>
                        <input value={inputs.phone} onChange={({target}) => setInputs({...inputs, phone: target.value})} type='text' placeholder="+995 _ _ _ _"/>
                    </div>
                    <div className='' >
                        <LinkCircles current={1}  valid={valid} />
                    </div>
                    <button className='zimbabue' type='submit' style={{display: 'none'}} ></button>
                </form>
                <div className="infoDiv">
                    <div className='infoTitle'>
                        <p>Redberry Origins</p>
                    </div>
                    <div className='infoText'>
                        <p>
                        You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry
                        </p>
                    </div>
                </div>
            </div>
        )
    }


    const mapStateToPsops = (state) => {
        return {
            validReducer: state.validReducer
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            firstChange : (data) => {
                dispatch(firstChange(data))
            }
        }
    }
    
    
    
    
    export default connect(mapStateToPsops, mapDispatchToProps)(First)