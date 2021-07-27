import React from "react";
import Menu from ".";
import { FaFilter,FaStar,FaRegHeart } from "react-icons/fa";
function MenuItem() {
  return (
    <Menu>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="d-flex flex-row-reverse">
              <div className="p-4">
               <button className="btn btn-light"> <FaFilter />
               Filter</button>
              </div>
            </div>
            <div className="d-flex flex-row-reverse">
              <div className="">
              <label>Sort By</label>
              <select className="form-select" aria-label="Default select example">
              <option selected>Recomdated</option>
              <option value="1">Favourate</option>
              <option value="2">fsdfsd</option>
              <option value="3">fsdfsd</option>
            </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <ItemCard
                color="#d9c8c5"
                  chooseItemPhoto="https://media.istockphoto.com/photos/red-cabbage-leaves-cut-in-a-cup-on-white-background-picture-id514913045?k=6&m=514913045&s=612x612&w=0&h=O27GSiu4bxJLBQgPscpXscGbpUkCbbjWr0j47aHGtrk="
                  itemName="Cabage Salad"
                  itemWeight="200"
                  itemPrice="200"
                  rating="4.2"
                  
                />
              </div>
              <div className="col-md-4">
              <ItemCard
              color="#fce1ee"
                chooseItemPhoto="https://media.istockphoto.com/photos/red-cabbage-leaves-cut-in-a-cup-on-white-background-picture-id514913045?k=6&m=514913045&s=612x612&w=0&h=O27GSiu4bxJLBQgPscpXscGbpUkCbbjWr0j47aHGtrk="
                itemName="Cabage Salad"
                itemWeight="200"
                itemPrice="200"
                rating="4.2"
              />
              </div>
              <div className="col-md-4">
              <ItemCard
              color="#e1fcf4"
                chooseItemPhoto="https://media.istockphoto.com/photos/red-cabbage-leaves-cut-in-a-cup-on-white-background-picture-id514913045?k=6&m=514913045&s=612x612&w=0&h=O27GSiu4bxJLBQgPscpXscGbpUkCbbjWr0j47aHGtrk="
                itemName="Cabage Salad"
                itemWeight="200"
                itemPrice="200"
                rating="4.2"
              />
              </div>
            </div>
            <div className="row mt-4">
            <div className="col-md-4">
              <ItemCard
              color="#e1fcf4"
                chooseItemPhoto="https://media.istockphoto.com/photos/red-cabbage-leaves-cut-in-a-cup-on-white-background-picture-id514913045?k=6&m=514913045&s=612x612&w=0&h=O27GSiu4bxJLBQgPscpXscGbpUkCbbjWr0j47aHGtrk="
                itemName="Cabage Salad"
                itemWeight="200"
                itemPrice="200"
                rating="4.2"
              />
            </div>
            <div className="col-md-4">
            <ItemCard
            color="white"
              chooseItemPhoto="https://media.istockphoto.com/photos/red-cabbage-leaves-cut-in-a-cup-on-white-background-picture-id514913045?k=6&m=514913045&s=612x612&w=0&h=O27GSiu4bxJLBQgPscpXscGbpUkCbbjWr0j47aHGtrk="
              itemName="Cabage Salad"
              itemWeight="200"
              itemPrice="200"
              rating="4.2"
            />
            </div>
            <div className="col-md-4">
            <ItemCard
            color="#c8d7db"
              chooseItemPhoto="https://media.istockphoto.com/photos/red-cabbage-leaves-cut-in-a-cup-on-white-background-picture-id514913045?k=6&m=514913045&s=612x612&w=0&h=O27GSiu4bxJLBQgPscpXscGbpUkCbbjWr0j47aHGtrk="
              itemName="Cabage Salad"
              itemWeight="200"
              itemPrice="200"
              rating="4.2"
            />
            </div>
          </div>
          <div className="row mt-4">
          <div className="col-md-4">
            <ItemCard
            color="#fce1ee"
              chooseItemPhoto="https://media.istockphoto.com/photos/red-cabbage-leaves-cut-in-a-cup-on-white-background-picture-id514913045?k=6&m=514913045&s=612x612&w=0&h=O27GSiu4bxJLBQgPscpXscGbpUkCbbjWr0j47aHGtrk="
              itemName="Cabage Salad"
              itemWeight="200"
              itemPrice="200"
              rating="4.2"
            />
          </div>
          <div className="col-md-4 col-sm-4">
          <ItemCard
          color="#f7f5c3"
            chooseItemPhoto="https://media.istockphoto.com/photos/red-cabbage-leaves-cut-in-a-cup-on-white-background-picture-id514913045?k=6&m=514913045&s=612x612&w=0&h=O27GSiu4bxJLBQgPscpXscGbpUkCbbjWr0j47aHGtrk="
            itemName="Cabage Salad"
            itemWeight="200"
            itemPrice="200"
            rating="4.2"
          />
          </div>
          
        </div>
          </div>
          <div className="col-md-2 mt-5">
             <div className="d-flex">
               <h3 className="fw-bold">My Order</h3>
             </div>
          </div>
        </div>
      </div>
    </Menu>
  );
}

export default MenuItem;

const ItemCard = (props) => {
  return (
    <div className="colors rounded card" style={{backgroundColor: props.color}}>
      <div className="card-body position-relative shadow-sm">
        <img
          src={props.chooseItemPhoto}
          alt={props.alt}
          className="img-fluid rounded-circle"
          style={{ marginLeft: "75px", height: "80px", width: "80px" }}
        />
        <div className="d-flex flex-row">
          <div className="p-2">
            <p className="text-muted mt-3 mb-0  ml-0">{props.itemName}</p>
          </div>
          <div className="p-2 mt-3 mb-0 bg-white rounded-pill">{props.itemWeight}g</div>
        </div>
         <p className="mb-0 fw-bold">${props.itemPrice}</p>
         <div className="position-absolute rounded-pill bg-dark" style={{top:"8px"}}>
         <span className="badge badge-success">
         <FaStar color="yellow"/> {props.rating}
       </span>
         </div>
         
         <div className="position-absolute rounded-circle bg-light" style={{top:"8px",right:"8px"}}>
         <span className="badge badge-success">
         <FaRegHeart color="black"/> 
       </span>
         </div>
         
         
      </div>
    </div>
  );
};
