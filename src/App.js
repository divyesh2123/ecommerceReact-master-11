import logo from './logo.svg';
// import './App.css';
import Login from './Login';
import Signup from './Signup';
import Product from './Product';
import RequireAuth from './private/RequireAuth'
import { BrowserRouter, Routes,Route, NavLink } from 'react-router-dom';
import CustComLink from './CustComLink';

function App() {
  return (
    <BrowserRouter>

<CustComLink to='/'>Login</CustComLink>

<NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    color: '#fff',
                    background: '#7600dc',
                  }
                : { color: '#545e6f', background: 'red' }
            }
          >MyPage
            </NavLink>

    <Routes>

    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/productlist" element={<RequireAuth><Product/>
    
      </RequireAuth>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
