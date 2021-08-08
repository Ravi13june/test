import React, { useState, useEffect } from "react";
import axios from "axios";
import arraySort from "array-sort";
import _ from "lodash";


const pageSize = 10;

const CountriesData = () => {

 
  const [searchCountries, setSearchCountries] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [countryDetails, setCountryDetails] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);

  const fetchAPIData = async () => {

    const res = await axios.get(`https://disease.sh/v3/covid-19/countries`);
    let actualData = res.data;
   // console.log(actualData);
    let myData = arraySort(actualData, "cases", { reverse: true });
    setCountryDetails(myData);
    setPaginatedData(_(myData).slice(0).take(pageSize).value())
   // console.log(myData)
  };
 useEffect(() => {
    fetchAPIData();
}, []);
 
const ChangeSortValue = e =>{
    let country = countryDetails;
     const value = e.target.value;
     let sortByReverse = true;
     if(value === "HIGHEST"){
       sortByReverse=true;
     }
     else {
       sortByReverse=false;
     }
     let countryDetails = arraySort(country, 'cases', { reverse:sortByReverse });
     setCountryDetails(countryDetails);
   }


   const pageCount = countryDetails? Math.ceil(countryDetails.length/pageSize) :0;
   if(pageCount ===1) return null;
   const pages = _.range(1, pageCount+1)
   
   const pagination = (pageNo)=>{
     setCurrentPage(pageNo);
     const startIndex = (pageNo-1)*pageSize;
     const paginatedDetails = _(countryDetails).slice(startIndex).take(pageSize).value();
     setPaginatedData(paginatedDetails);
   }
 
  return (
    <div>
      <div className="d-flex mt-3">
        <div className="col-md-8 form-group">
          <input
            onChange={(e)=>{
              setSearchCountries(e.target.value);
            }}
            className="form-control"
            placeholder="Search country"
            type="text"
            
          />
        </div>
        <div className="col-md-4 form-group">
          <select className="form-control" onChange={ChangeSortValue}>
            <option value = "HIGHEST">HIGHEST</option>
            <option>LOWEST</option>
          </select>
        </div>
      </div>
      <table className="table table-hover mt-2">
        <thead className="table-dark">
          <tr>
            <th>SR No.</th>
            <th>Country</th>
            <th>Total cases</th>
            <th>Active cases</th>
            <th>Total deaths</th>
            <th>Vaccination data</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.filter((searchKey)=>{
            if(searchCountries===""){
              return searchKey;
            } else if(searchKey.country.toLowerCase().includes(searchCountries.toLowerCase()))
              return searchKey;
          }).map((details, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><span><img  src={details.countryInfo.flag} className="img-fluid" style={{height:"20px", width:"30px"}}/></span>{details.country}</td>
                <td>{details.cases}</td>
                <td>{details.active}</td>
                <td>{details.deaths}</td>
                <td><span className="text-muted">data not fount</span></td>
              </tr>
            );
          })}
          
        </tbody>
     </table>
     <nav className="d-flex justify-content-center">
     <ul className="pagination">
     {
       pages.map((page, index)=>(
         <li className={page ===currentPage? "page-item active" : "page-item"} key={index}>
          <p className="page-link btn" onClick={()=>pagination(page)}>{page}</p>
         </li>
       ))
     }
      
     </ul>
   </nav>
    </div>
  );
};

export default CountriesData;























//https://www.awesomescreenshot.com/video/4736134?key=a84a21a604d6ee42acc039e7a2f6286b