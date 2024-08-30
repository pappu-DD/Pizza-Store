import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <>
      {/* ---Carousel----- */}
      <div
        id="carouselExampleAutoplaying "
        className="carousel slide  carousel-it"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.ctfassets.net/721r5zsckzl2/7uYBIRI9LyfosxWCUPOvA4/2bca060e38174174ee68d5f010b8decc/PN_DD_Web_Carousel_1920x835px_FINAL.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.kglobalservices.com/www.kelloggs.co.za/en_za/recipe/recipe_6722545/recip_img-6738177_za-r-pizza-dough-2202101934-1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20240720/pngtree-taking-slice-picture-of-prepared-delicious-pizza-with-sausage-rings-and-image_15902897.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ---pizza----- */}
      <div className="pizza-typ">
        <div className="card">
          <div className="card-header">PIZZA</div>
          <div className="pizza-body">
            <div className="card-body">
              <div className="card card-shadow" style={{ width: "14rem" }}>
                <img
                  src="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_570541132.jpg.webp"
                  className="card-img-top pizza-type"
                  alt="..."
                />
                <div className="type-title">
                  <h5 className="card-title pizza-name">Veggie Pizza</h5>
                </div>
              </div>
              <div className="card card-shadow " style={{ width: "14rem" }}>
                <img
                  src="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
                  className="card-img-top pizza-type"
                  alt="..."
                />
                <div className="type-title">
                  <h5 className="card-title">Pepperoni Pizza</h5>
                </div>
              </div>
              <div className="card card-shadow " style={{ width: "14rem" }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpp8dLQtmuSZT_ruOPHgh4e1h2YaIWU9pmw&s"
                  className="card-img-top pizza-type"
                  alt="..."
                />
                <div className="type-title">
                  <h5 className="card-title">Chicken Pizza</h5>
                </div>
              </div>
              <div className="card card-shadow " style={{ width: "14rem" }}>
                <img
                  src="https://againstthegraingourmet.com/cdn/shop/products/ThreeCheese_Pizza_Beauty_d3eeea98-1706-4092-8171-60738ac55937_1000x1000.jpg?v=1658703750"
                  className="card-img-top pizza-type"
                  alt="..."
                />
                <div className="type-title">
                  <h5 className="card-title">Cheese Pizza</h5>
                </div>
              </div>
              <div className="card card-shadow" style={{ width: "14rem" }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXRf-KqN1p49T4VdldsRMvTupRWmu9oSBPw&s"
                  className="card-img-top pizza-type"
                  alt="..."
                />
                <div className="type-title">
                  <h5 className="card-title">Margherita Pizza</h5>
                </div>
              </div>
            </div>
            <div className="more-btn">
              <button class="button">
                <span>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/allitems"
                  >
                    All items
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- Mobile App-------------------- */}
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start mobile-app">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3 download-app">
            Download mobile App now
            <h3 className="tt">--TASTY TRIANGLE--</h3>
          </h1>
          <div className="app-image">
            <img
              src="image/mobileapp.png"
              className="mobile-app-image"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-10 mx-auto col-lg-5 ">
          <h3>We will send you a download link</h3>
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary form-fill">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            {/* <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div> */}
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>

      {/* -----Footer------ */}
      <>
        <footer className="text-center text-lg-start bg-body-tertiary text-muted ">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer-font">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div className="">
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="footer-main">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />
                    Tasty Triangle
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 contact">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Branch</h6>
                  <p>
                    <a href="#" className="text-reset">
                      Ranchi
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Delhi
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Dhanbad
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Mumbai
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Chatra
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 contact">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3" />{" "}
                    <img
                      className="icon"
                      src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
                      alt=""
                    />{" "}
                    HQ : Ranchi, JH - 834010
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3" />{" "}
                    <img
                      className="icon"
                      src="https://cdn-icons-png.flaticon.com/128/542/542689.png"
                      alt=""
                    />{" "}
                    tastytriangle@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" />{" "}
                    <img
                      className="icon"
                      src="https://cdn-icons-png.flaticon.com/128/3059/3059502.png"
                      alt=""
                    />{" "}
                    + 91 9798638678
                  </p>
                  <p>
                    <i className="fas fa-print me-3" />{" "}
                    <img
                      className="icon"
                      src="https://cdn-icons-png.flaticon.com/128/3059/3059502.png"
                      alt=""
                    />{" "}
                    + 91 8888004343
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Socia links</h6>
                  <div className="social-midea">
                    <a href="https://www.linkedin.com/in/pappu-kumar-ba5103302/">
                      <i class="bi bi-linkedin icon-s"></i>
                    </a>
                    <a href="https://www.instagram.com/zzara_india_wala/">
                      <i class="bi bi-instagram icon-s"></i>
                    </a>
                    <a href="https://x.com/zzaraindiawala">
                      <i class="bi bi-twitter icon-s"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100023399821984">
                      <i class="bi bi-facebook icon-s"></i>
                    </a>
                    <a href="https://www.youtube.com/@zzaraindiawala2446">
                      <i class="bi bi-youtube icon-s"></i>
                    </a>
                  </div>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div className="text-center p-4 footer-foorter">
            © 2024 Copyright :-
            <a
              className="text-reset fw-bold footer-link"
              href="https://mdbootstrap.com/"
            >
              tastytriangle.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </>
    </>
  );
}
export default Home;
