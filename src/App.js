import './App.css';
import { connect, useDispatch } from 'react-redux';
import { Route, Routes, Link } from 'react-router-dom';
import First from './pages/first';
import Second from './pages/second';
import Third from './pages/third';
import Fourth from './pages/fourth';
import Fifth from './pages/fifth';
import Sixth from './pages/sixsth';




const App = ({num}) => {

  return(
      <Routes>
        <Route path='/' element={<h1>openPage</h1>} />
        <Route path='/1' element={<First />} />
        <Route path='/2' element={<Second />} />
        <Route path='/3' element={<Third />} />
        <Route path='/4' element={<Fourth />} />
        <Route path='/5' element={<Fifth />} />
        <Route path='/6' element={<Sixth />} />
      </Routes>
  )
}


const mapStateToPsops = (state) => {
  return{
    num: state
  }
}


export default connect(mapStateToPsops)(App)