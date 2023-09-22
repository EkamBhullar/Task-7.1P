import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './header';
import Login from './login';
import Signup from './signup';
function App() {
  return (

    <Routes>

<Route path='/' element ={<Header />} />
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>

    </Routes>
  );
}

export default App;
