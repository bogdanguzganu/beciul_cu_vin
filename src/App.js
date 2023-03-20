import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import RoseCart from './components/Rose';
import WhiteCart from './components/White';
import RedCart from './components/Red';
import Account from './components/Account';
import Cart from './components/Cart';

function App() {
  
  return (
    
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/rose' element = {<RoseCart/>}></Route>
      <Route path='/white' element = {<WhiteCart/>}></Route>
      <Route path='/red' element = {<RedCart/>}></Route>
      <Route path='/account' element = {<Account/>}></Route>
      <Route path='/cart' element = {<Cart/>}></Route>
    </Routes>
  )
}

export default App
