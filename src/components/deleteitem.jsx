import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './allitems.css';

function Deleteitems() {
  const [pizzas, setPizzas] = useState([]);
  const [nonVegPizzas, setNonVegPizzas] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/pizza');
        setPizzas(response.data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    const fetchNonVegPizzas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/nonvegPizzas');
        setNonVegPizzas(response.data);
      } catch (error) {
        console.error('Error fetching non-veg pizzas:', error);
      }
    };

    const fetchDrinks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/drink');
        setDrinks(response.data);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchPizzas();
    fetchNonVegPizzas();
    fetchDrinks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/pizza/${id}`);
      setPizzas(pizzas.filter((pizza) => pizza.id !== id));
    } catch (error) {
      console.error('Error deleting pizza:', error);
    }
  };

  const handleDeleteNonVeg = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/nonvegPizzas/${id}`);
      setNonVegPizzas(nonVegPizzas.filter((nonVegPizza) => nonVegPizza.id !== id));
    } catch (error) {
      console.error('Error deleting non-veg pizza:', error);
    }
  };

  const handleDeleteDrink = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/drink/${id}`);
      setDrinks(drinks.filter((drink) => drink.id !== id));
    } catch (error) {
      console.error('Error deleting drink:', error);
    }
  };

  return (
    <div>
      {/* Veg Pizzas */}
      <div className="container mt-4 row">
        <h2 className="heading">Veg Pizzas</h2>
        {pizzas.map((pizza) => (
          <div className="card-group col-md-3" key={pizza.id}>
            <div className="card">
              <img src={pizza.image} className="card-img-top veg-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <div className="btn-style">
                    <div className="buy-btn1">Rs. {pizza.price}</div>
                    <button className="buy-btn" onClick={() => handleDelete(pizza.id)}>Delete</button>
                  </div>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deleteitems;