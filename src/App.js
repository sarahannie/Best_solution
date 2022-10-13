
import './App.css';
import Cart from './page/Cart';
import CatergoryPage from './page/CatergoryPage';
import Home from './page/Home';
import Login from './page/Login';
// import ProductPage from './page/ProductPage';
import Register from './page/Register';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
                <Route  path='/' element={< Home />} />
                <Route  path='/product' element={<CatergoryPage />} />
                <Route  path='/login' element={<Login />} />
                <Route  path='/Register' element={<Register />} />
                <Route  path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;