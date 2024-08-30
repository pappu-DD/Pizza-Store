import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import "./addnewitem.css";

function Addnewitem() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      price: "",
      imageUrl: "",
    },
    validationSchema: Yup.object({
      id: Yup.number().required("ID is required"),
      name: Yup.string()
        .min(4, "Name must be at least 5 characters")
        .required("Name is required"),
      price: Yup.number()
        .min(10, "Price must be at least 10 rupees")
        .required("Price is required"),
      imageUrl: Yup.string()
        .url("Invalid URL")
        .required("Image URL is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
      axios.post("http://localhost:5000/newitems", values)
        .then((response) => {
          setStatus('success');
          resetForm();
          navigate('./newitem-list');
        })
        .catch((error) => {
          setStatus('error');
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="container mt-4 container-main">
    <h2 className="text-center mb-4">Add new item</h2>
  
    <form onSubmit={formik.handleSubmit} className="row g-3">
      <div className="col-md-6">
        <label className="form-label">ID</label>
        <input
          id="id"
          name="id"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.id}
          className="form-control"
        />
        {formik.touched.id && formik.errors.id ? (
          <div className="text-danger">{formik.errors.id}</div>
        ) : null}
      </div>
  
      <div className="col-md-6">
        <label className="form-label">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="form-control"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-danger">{formik.errors.name}</div>
        ) : null}
      </div>
  
      <div className="col-md-6">
        <label className="form-label">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
          className="form-control"
        />
        {formik.touched.price && formik.errors.price ? (
          <div className="text-danger">{formik.errors.price}</div>
        ) : null}
      </div>
  
      <div className="col-md-6">
        <label className="form-label">Image URL</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
          className="form-control"
        />
        {formik.touched.imageUrl && formik.errors.imageUrl ? (
          <div className="text-danger">{formik.errors.imageUrl}</div>
        ) : null}
      </div>
  
      <div className="col-12">
        <button type="submit" className="btn btn-primary w-100 submit-btn">
          Submit
        </button>
      </div>
    </form>
  </div>
  );
}

export default Addnewitem;