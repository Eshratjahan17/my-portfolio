
import { Route, Routes } from 'react-router-dom';
import './App.css';


import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import MyResume from './Components/MyResume/MyResume';
import NotFound from './Components/NotFound';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';


function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/myresume" element={<MyResume></MyResume>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/projectDetails/:id"
          element={<ProjectDetails></ProjectDetails>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
