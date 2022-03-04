import './App.css';
import { connect } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import OpeningPage from './pages/openingPage';
import First from './pages/first';
import Second from './pages/second';
import Third from './pages/third';
import Fourth from './pages/fourth';
import Fifth from './pages/fifth';
import Sixth from './pages/sixsth';




const App = ({valid}) => {
const location = useLocation()

const {first, second, third, fourth}= valid

console.log(first, second, location.pathname)


  return(
      <Routes>
        <Route path='/' element={<OpeningPage />} />
        <Route path='/1' element={<First />} />
        {first ? <Route path='/2' element={<Second />} />
               : null}
        {first && second ? <Route path='/3' element={<Third />} />
               : null}
        {first && second && third ? <Route path='/4' element={<Fourth />} />
               : null}
        {first && second && third && fourth ? <Route path='/5' element={<Fifth />} />
               : null}
        {/* <Route path='/3' element={<Third />} /> */}
        {/* <Route path='/4' element={<Fourth />} /> */}
        {/* <Route path='/5' element={<Fifth />} /> */}
        <Route path='/6' element={<Sixth />} />
      </Routes>
  )
}


const mapStateToPsops = (state) => {
  return{
    valid: state.validReducer
  }
}


export default connect(mapStateToPsops)(App)