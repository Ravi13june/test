// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import axios from "axios";

// const LineChart = () => {
//     const [chartData, setChartData] = useState({});
//     const [country, setCountry] = useState([]);
//     const [totalCases, setTotalCases] = useState([]);
//     const [activeCases, setActiveCases] = useState([]);
//     const [deaths, setdeaths] = useState([]);

//     const loadChartData = () => {
  
//             let country = [];
//             let totalCases = [];
//             let activeCases = [];
//             let totadeathslCases = [];
//             const res = await axios.get(`https://disease.sh/v3/covid-19/countries`);
//             let actualData = res.data;
//             for(obj of actualData){
//                 country.push(actualData.country);
//             }
           
      
//    }


//    useEffect(()=>{
//        loadChartData()
//    })

//     return (
//         <div>
            
//         </div>
//     )
// }

// export default LineChart
