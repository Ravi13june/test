import React from 'react';
import './App.css';
import Sidebar from './sidebar';
import {BrowserRouter} from 'react-router-dom';
import Menu from './menu';
import MenuItem from './menu/MenuItem';

function App() {
  return (
   
   <BrowserRouter>
     
      <MenuItem/>
   </BrowserRouter>
   
  );
}

export default App;
