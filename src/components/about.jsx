import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <>
      <div className=" about-heading">
        <h3 className=" mt-36 mb-4  text-center font-bolder text-6xl relative z-20 head-about ">
          About Us
        </h3>
        <h5 className="text-center text-gray-700 text-2xl mb-36 relative z-20">
          Your tasty with TASTY TRIANGLE is my responsibility .
        </h5>
      </div>

      {/* ----------------------dash board--------------------------- */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Welcome to Tasty Triangle, where passion meets the perfect slice!
            </h1>
            <p className="lead">
              it's an experience. Our story began with a love for the art of
              pizza-making and a dream to bring a delicious, innovative twist to
              your table. Using only the freshest ingredients and time-honored
              techniques, we craft pizzas that delight the senses and warm the
              soul. Whether you’re craving a classic Margherita or an
              adventurous new creation, Tasty Triangle promises a slice of
              happiness with every bite. Join us in celebrating great pizza and
              even greater moments!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  to="/allitems"
                >
                  Let's Order
                </Link>
              </button>
              {/* <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button> */}
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="./image/logopizza.png"
              alt=""
              width={370}
            />
          </div>
        </div>
      </div>
      {/* ---------------------------------------branch--------------------------------- */}

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://legaladda.com/wp-content/uploads/2021/03/FSSAI-License-Consultant-in-Ahmedabad.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
