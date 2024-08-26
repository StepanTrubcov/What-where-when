import './App.css';
import Header from './Component/Header/Header'
import { Route, Routes } from "react-router-dom";
import FormConteiner from './Component/Form/FormConteiner'
import Navbar from './Component/Navbar/Navbar'
import {BrowserRouter} from "react-router-dom";
import ShowConteiner from './Component/Show/ShowConteiner'

const App = (props) => {
  return (
    <div className="app-wrapper">
          <BrowserRouter>
      <Header />
      <Navbar/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/form/' element={<FormConteiner/>} />
          <Route path='/show/' element={<ShowConteiner/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
};


export default App;
