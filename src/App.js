import './App.css';
import Header from './Component/Header/Header'
import { Route, Routes } from "react-router-dom";
import FormTextConteiner from './Component/Form/FormText/FormConteiner'
import Navbar from './Component/Navbar/Navbar'
import FormImgConteiner from './Component/Form/FormImg/FormImgConteiner'
import {BrowserRouter} from "react-router-dom";
import ShowConteiner from './Component/Show/ShowConteiner'
import ShowImgConteiner from './Component/Show/ShowImg/ShowImgConteiner'
import Choice from './Component/Choice/Choice'

const App = (props) => {
  return (
    <div className="app-wrapper">
          <BrowserRouter>
      <Header />
      <Navbar/>
      <div className="app-wrapper-content">
        <Routes>
        <Route path='/choice/' element={<Choice/>} />
          <Route path='/form/' element={<FormTextConteiner/>} />
          <Route path='/formImg/' element={<FormImgConteiner/>} />
          <Route path='/show/' element={<ShowConteiner/>} />
          <Route path='/showImg/' element={<ShowImgConteiner/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
};


export default App;
