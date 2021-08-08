import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LineChart from './components/dashboard/chart/line-chart/LineChart';
import CountriesData from './components/dashboard/contries-wise-data';
import Statewise from './components/dashboard/india/StateWise';
import Header from './components/header';
//import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Switch>
   <Route exact path="/" component={CountriesData}/>
   
   {/*<LineChart/>*/}
   <Route exact path="/state-wise" component={Statewise}/>
   </Switch>
  
   </BrowserRouter>
  
  );
}

export default App;
