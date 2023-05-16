import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer';
import Navbr from './components/navbr';
import SignIn from './components/signin';
import SignUp from './components/signup';


function App() {
  return (
    <>
    <Navbr/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;

