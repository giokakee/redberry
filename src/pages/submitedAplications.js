import axios from "axios"
import { useState } from "react"
import '../style/submitedApps.css'

const SubmitedApps = () => {
const [tr, setTr] = useState(false)
    let massive = [
        {
            name: 'kakee',
            shame: 'tame'
        },      {
            name: 'iaoooo',
            shame: 'tame'
        },      {
            name: 'aekkkkkk',
            shame: 'tame'
        }
    ]

    const test = (s) => {
        let b = document.findById(`#${s}`)
        console.log(b)
    }


    return(
        <div className='main'>
            <p className="subHeader">Submitted Applications</p>
            <div>
                {massive.map((mp, index) => {
                                    return(
                                        <div key={index}>
                                            <li>{mp.name}</li>
                                            <div id={`${mp.name}`} className={tr? "notShow" : 'show'}>
                                                <p>aasdad</p>
                                                <p>aasdad</p>
                                                <p>aasdad</p>
                                                <p>aasdad</p>
                                                <p>aasdad</p>
                                            </div>
                                            <button onClick={() => test(mp.name)}>zimbabue</button>
                                        </div>
                                    )
                                })}
            </div>
        </div>
    )
}


export default SubmitedApps