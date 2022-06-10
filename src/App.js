
import { Route, Routes } from 'react-router-dom';
import './App.css';


import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MyResume from './Components/MyResume/MyResume';


function App() {
  return (
    <div>
      <Header></Header>
      
      
      <Routes>
        <Route path="/myresume" element={<MyResume></MyResume>}></Route>
      </Routes>
      <Home></Home>

      <Footer></Footer>
    </div>
  );
}

export default App;
