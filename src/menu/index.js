import React from 'react'

import Sidebar from '../sidebar';

function Menu(props) {
    const { children } = props;
    return (
        <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 bg-success">
              <Sidebar />
              </div>
           
              <div className="col-md-10">
             {children}
              </div>
            </div>
        </div>
    )
}

export default Menu;
