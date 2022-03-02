// display: flex;
//     align-items: center;
//     width: 231px;
//     justify-content: space-between;


import { Link } from 'react-router-dom';
import { Circle, LeftArrow, RightArrow } from './svg/allSvg';


const LinkCircles = ({current, valid}) => {

    let style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '231px',
        marginBottom: '157px'
    }




    return(
        <div style={style}>
            <Link to={`/${current == 1 ?  '' : current - 1}`}>
                <LeftArrow />
            </Link>
            <Link to='/1'>
                <Circle />
            </Link>
            <Link to='/2'>
                <Circle />
            </Link>
            <Link to='/3'>
                <Circle />
            </Link>
            <Link to='/4'>
                <Circle />
            </Link>
            <Link to='/5'>
                <Circle />
            </Link>
            <Link to={`/${valid ? current < 5 ? current + 1 : '': current}`}>
                <RightArrow />
            </Link>
        </div>
    )
}

export default LinkCircles
