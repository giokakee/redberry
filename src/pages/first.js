import '../style/first.css'
import LinkCircles from '../linkCircles';
import { useState } from 'react';


const First = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emaill, setEmail] = useState('');
    const [number, setNumber] = useState('');
    

let regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexMobile = /995/;
let valid = name.length > 2 && lastName.length > 2 && regexMobile.test(number) && regexMail.test(emaill)



        return(
            <div className="container">
                <div className="formDiv">
                    <div className="title">
                        <p>Hey, Rocketeer, what are your coordinates?</p>
                    </div>
                    <div className="form">
                        <input onChange={({target}) => setName(target.value)} type='text' placeholder="First Name" required />
                        <input onChange={({target}) => setLastName(target.value)} type='text' placeholder="Last Name" />
                        <input onChange={({target}) => setEmail(target.value)} type='text' placeholder="E Mail"/>
                        <input onChange={({target}) => setNumber(target.value)} type='text' placeholder="+995 _ _ _ _"/>
                    </div>
                    <div className='' >
                        <LinkCircles current={1}  valid={valid} />
                    </div>
                </div>
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
    


    export default First