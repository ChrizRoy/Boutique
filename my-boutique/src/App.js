import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer';
import SignIn from './components/signin';
import Reg from './components/reg';


function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/reg" element={<Reg/>}/>
    </Routes>
    </>
  );
}

export default App;

