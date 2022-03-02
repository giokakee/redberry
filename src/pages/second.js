import '../style/second.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import LinkCircles from '../linkCircles';


const Second = () => {
    let [skills, setSkills] = useState([])
    let [chosenSkills, setChosenSkills] = useState({
        skill: '',
        experience: ''
    })

    useEffect(() => {
        const getSkills = async() => {
            try{
                let {data} = await axios.get('https://bootcamp-2022.devtest.ge/api/skills')
                setSkills(data)
            }catch(err){
                console.log({message: err.message})
            }
        }
        getSkills()
    }, [])

       return(
            <div className="container">
                <div className="formDiv">
                    <div className="title">
                        <p>Tell us about your skills</p>
                    </div>
                    <div className="form">
                        <select defaultValue={'skills'} onChange={({target}) => setChosenSkills({skill: target.value, experience: chosenSkills.experience})}>
                            <option  disabled value={'skills'}>skills</option>
                            {skills.map(skills => {
                                return(
                                        <option key={skills.id} value={skills.title}>{skills.title}</option>
                                        )
                                    })}
                            </select>
                        <input onChange={({target}) => setChosenSkills({skill: chosenSkills.skill, experience: target.value})}  type='text' placeholder="Experience Duration in Years" />
                        <div className='buttonDiv'>
                            <button onClick={() => console.log(chosenSkills)}>Add Programming Language</button>
                        </div>
                    </div>
                    <div>
                        {skills.map(mp => {
                            console.log(mp)
                            return(
                                <div key={mp.id} className='skillsDiv'>
                                    <p>{mp.title}</p>
                                    <p> experience of year 2</p>
                                    <button>test</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className='' >
                     <LinkCircles current={2} valid={true} />
                    </div>
                </div>
                <div className="infoDiv">
                    <div className='infoTitle'>
                        <p>A bit about our battles</p>
                    </div>
                    <div className='infoText'>
                        <p>
                        As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.                        </p>
                    </div>
                </div>
            </div>
        )
    }
    


    export default Second