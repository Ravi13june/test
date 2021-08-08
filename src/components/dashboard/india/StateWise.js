import React, { useState, useEffect } from "react";

const Statewise = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(`https://api.covid19india.org/data.json`);
    const actualData = await res.json();
    setData(actualData.statewise);
    console.log(actualData.statewise)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="text-center">
        <span className="fw-bold ">INDIA</span> COVID-19 Dashboard
      </h1>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>SR No.</th>
              <th>State</th>
              <th>Total cases</th>
              <th>Active cases</th>
              <th>Total deaths</th>
              <th>Vaccination data</th>
            </tr>
          </thead>
          <tbody>
           {
               data.map((itr, index) =>{
                   return(
                       <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{itr.state}</td>
                        <td>{itr.confirmed}</td>
                        <td>{itr.active}</td>
                        <td>{itr.deaths}</td>
                        <td><span className="text-muted">data not found</span></td>
                       </tr>
                   )
               })
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statewise;
