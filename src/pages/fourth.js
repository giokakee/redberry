// import '../style/Third.css'
import LinkCircles from '../linkCircles';

const Third = () => {
        return(
            <div className="container">
                <div className="formDiv">
                    <div className="title">
                        <p>What about you?</p>
                    </div>
                    <div className="form">
                        <input type='text' placeholder="Skills" autoComplete='off' />
                        <input type='text' placeholder="Experience Duration in Years" />
                        <button>Add Programming Language</button>
                    </div>
                    <div>
                        zimbabue
                    </div>
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