import React, { useEffect, useState } from "react";
import axios from "axios";
import "./allitems.css";

function Allitems() {
  const [pizzas, setPizzas] = useState([]);
  const [nonVegPizzas, setNonVegPizzas] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pizza")
      .then((response) => {
        setPizzas(response.data);
      })
      .catch((error) => {
        console.error("there was an error fatching the data", error);
      });

    axios
      .get("http://localhost:5000/nonvegPizzas")
      .then((response) => {
        setNonVegPizzas(response.data);
      })
      .catch((error) => {
        console.error("there was an error fetching the data", error);
      });

      axios
      .get("http://localhost:5000/drink")
      .then((response) => {
        setDrinks(response.data);
      })
      .catch((error) => {
        console.error("there was an error fetching the data", error);
      });
  }, []);

  return (
    <>
      {/* -------------------veg pizza---------------------- */}
      <div className="container mt-4 row" >
        <h2 className="heading">Veg pizzas</h2>
        {pizzas.map((pizza) => (
          <div className="card-group col-md-3" key={pizza.id}>
            <div className="card">
              <img
                src={pizza.image}
                className="card-img-top veg-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                {/* <p className="card-text">{pizza.note}</p> */}
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <div className="btn-style">
                    <div className="buy-btn1">Rs. {pizza.price}</div>
                    <button className="buy-btn">Add in cart</button>
                  </div>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

{/* ----------------------------non veg pizza ----------------------- */}

      <div className="container mt-4 row">
        <h2 className="heading"> NON Veg pizzas</h2>
        {nonVegPizzas.map((nonvegPizzas) => (
          <div className="card-group col-md-3" key={nonvegPizzas.id}>
            <div className="card">
              <img
                src={nonvegPizzas.image}
                className="card-img-top veg-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{nonvegPizzas.name}</h5>
                {/* <p className="card-text">{nonvegPizzas.note}</p> */}
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <div className="btn-style">
                    <div className="buy-btn1">Rs. {nonvegPizzas.price}</div>
                    <button className="buy-btn">Add in cart</button>
                  </div>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>



      
      {/* --------------------------drinks------------------------------ */}
      <div className="container mt-4 row">
        <h2 className="heading"> Drinks</h2>
        {drinks.map((drink) => (
          <div className="card-group col-md-3" key={drink.id}>
            <div className="card">
              <img
                src={drink.image}
                className="card-img-top veg-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{drink.name}</h5>
                {/* <p className="card-text">{drink.note}</p> */}
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <div className="btn-style">
                    <div className="buy-btn1">Rs. {drink.price}</div>
                    <button className="buy-btn">Add in cart</button>
                  </div>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>




    </>
  );
}
export default Allitems;
