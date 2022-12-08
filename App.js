import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Home from "./template/home"
import Funding from "./template/funding"
import Custom from "./template/custom"

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element= {<Home/>}/>
        <Route path="funding" element = {<Funding/>}/>
        <Route path="custom" element = {<Custom/>}/>
      </Routes>
    </BrowserRouter>
  )
}



export default App;
