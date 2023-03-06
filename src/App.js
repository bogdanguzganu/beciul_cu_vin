import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import RoseCart from './components/Rose';
import WhiteCart from './components/White';
import RedCart from './components/Red';

function App() {
  return (
    
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/rose' element = {<RoseCart/>}></Route>
      <Route path='/white' element = {<WhiteCart/>}></Route>
      <Route path='/red' element = {<RedCart/>}></Route>
    </Routes>
  )
}

export default App
