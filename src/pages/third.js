// import '../style/Third.css'
import LinkCircles from '../linkCircles';

const Third = () => {
        return(
            <div className="container">
                <div className="formDiv">
                    <div className="title">
                        <p>Covid Stuff</p>
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