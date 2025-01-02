import './App.css';
import Header from './Component/Header/Header'
import { Route, Routes } from "react-router-dom";
import FormTextConteiner from './Component/Form/FormText/FormConteiner'
import Navbar from './Component/Navbar/Navbar'
import FormImgConteiner from './Component/Form/FormImg/FormImgConteiner'
import {BrowserRouter} from "react-router-dom";
import ShowConteiner from './Component/Show/Show/ShowConteiner'
import ShowImgConteiner from './Component/Show/ShowImg/ShowImgConteiner'
import Choice from './Component/Choice/Choice'
import Wrapper from './Wrapper/Wrapper';

const App = (props) => {
  if(window.innerWidth < 1000){
    return <Wrapper/>
  }
  return (
    <div className="app-wrapper">
          <BrowserRouter>
          <Header />
      <div className="app-wrapper-content">
      <Navbar/>
        <Routes>
        <Route path='/What-where-when' element={<Choice/>} />
          <Route path='/form/' element={<FormTextConteiner/>} />
          <Route path='/formImg/' element={<FormImgConteiner/>} />
          <Route path='/show/' element={<ShowConteiner/>} />
          <Route path='/ShowImg/' element={<ShowImgConteiner/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
};


export default App;
