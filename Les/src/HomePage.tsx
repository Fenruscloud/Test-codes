import React from "react";
import "./models/styles.css"; // Import your CSS file

const HomePage: React.FC = () => {
  return (
    <div className="container py-5">
      <header className="text-center mb-4">
        <h1 className="display-4">Welcome to My Website</h1>
        <p className="lead">Your one-stop solution for all things awesome!</p>
      </header>

      {/* Carousel Section */}
      <div
  id="carouselExampleIndicators"
  className="carousel slide mb-4"
  data-bs-ride="carousel"
  data-bs-interval="3000" // Automatically scrolls every 3 seconds
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src="https://fastly.picsum.photos/id/620/200/300.jpg?hmac=ZLg-jrbFo8ASzAzQlxN4yMTNJJBpZtcpDXfwBxAvcT4"
        className="d-block w-100 carousel-image"
        alt="First Slide"
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://fastly.picsum.photos/id/5/200/300.jpg?hmac=1TWjKFT7_MRP0ApEyDUA3eCP0HXaKTWJfHgVjwGNoZU"
        className="d-block w-100 carousel-image"
        alt="Second Slide"
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://fastly.picsum.photos/id/602/200/300.jpg?hmac=TkzlF12MtJomcmqzsOc-CR43gSl3xnotDQRPBvM7Avw"
        className="d-block w-100 carousel-image"
        alt="Third Slide"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <main>
        <section className="mb-4">
          <h2>About Us</h2>
          <p>
            We are a team of passionate developers building amazing web
            applications to make your life easier.
          </p>
        </section>
        <section className="mb-4">
          <h2>Services</h2>
          <ul className="list-group">
            <li className="list-group-item">Web Development</li>
            <li className="list-group-item">Mobile App Development</li>
            <li className="list-group-item">UI/UX Design</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            Email:{" "}
            <a href="mailto:contact@mywebsite.com">contact@mywebsite.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+123 456 7890</a>
          </p>
        </section>
        <section id="contact" className="mb-4">
          <h2>Contact Us</h2>
          <p>
            Email:{" "}
            <a href="mailto:contact@mywebsite.com">contact@mywebsite.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+123 456 7890</a>
          </p>
        </section>

        <section id="info" className="mb-4">
          <h2>Info</h2>
          <p>Some information about the website or services.</p>
        </section>

        <section id="more-about-me">
          <h2>More About Me</h2>
          <p>Details about the developer or the team.</p>
        </section>
      </main>
      <footer className="text-center mt-4">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
