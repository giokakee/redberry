// display: flex;
//     align-items: center;
//     width: 231px;
//     justify-content: space-between;


import { Link, useLocation } from 'react-router-dom';
import { Circle, LeftArrow, RightArrow } from './svg/allSvg';


const LinkCircles = ({valid}) => {

const location = useLocation()
let current = Number(location.pathname[1])
    let style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '231px',
        marginBottom: '157px'
    }



    return(
        <div style={style}>
            <Link to={`/${current === 1 ?  '' : current - 1}`}>
                <LeftArrow />
            </Link>
            <Link to={`/1`}>
                {current >= 1 ? <Circle fill='#FE3B1F' /> : <Circle fill='#e9b2a9' />}
            </Link>
            <Link to={`/${valid ? '2' : '1'}`}>
                 {current >=2 ? <Circle fill='#FE3B1F' /> : <Circle fill='#e9b2a9' />}
            </Link>
            <Link to={`/${valid ? '3' : '2'}`}>
                 {current >= 3 ? <Circle fill='#FE3B1F' /> : <Circle fill='#e9b2a9' />}
             </Link>
            <Link to='/4'>
                 {current >=4 ? <Circle fill='#FE3B1F' /> : <Circle fill='#e9b2a9' />}
            </Link>
            <Link to='/5'>
                  {current >= 5 ? <Circle fill='#FE3B1F' /> : <Circle fill='#e9b2a9' />}
            </Link>
            <Link to={`/${valid ? current < 5 ? current + 1 : '': current}`}>
                <RightArrow />
            </Link>
        </div>
    )
}

export default LinkCircles
