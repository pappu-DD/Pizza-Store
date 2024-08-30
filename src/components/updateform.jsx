import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateItemForm({ match }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/newitems/${match.params.id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error("there was an error fetching the data", error);
      });
  }, [match.params.id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/newitems/${item.id}`, {
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("there was an error updating the item", error);
      });
  };

  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={item.imageUrl}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateItemForm;