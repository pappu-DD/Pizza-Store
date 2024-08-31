import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './updateitems.css'
import { Link } from 'react-router-dom';

function UpdateItems() {
  const [newItems, setNewItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/newitems")
      .then((response) => {
        setNewItems(response.data);
      })
      .catch((error) => {
        console.error("there was an error fetching the data", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/newitems/${id}`)
      .then((response) => {
        console.log(response.data);
        setNewItems(newItems.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("there was an error deleting the item", error);
      });
  };

  return (
    <>
      {/* -------------------veg pizza---------------------- */}
      <div className="container mt-4 row">
        <h2 className="heading">Updated items</h2>
        {newItems.map((item) => (
          <div className="card-group col-md-3" key={item.id}>
            <div className="card">
              <img
                src={item.imageUrl}
                className="card-img-top veg-img"
                alt="loading"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <div className="btn-style">
                    <div className="buy-btn1">Rs. {item.price}</div>
                    <Link to={`/updateitem/${item.id}`}>
                      <button
                        className="buy-btn "
                        id='update'
                      >
                        update
                      </button>
                    </Link>
                  </div>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UpdateItems;