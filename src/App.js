import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from './header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://maltapark.com/images/banners/banner1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Fancy a new car?</h1>
              <a href="#" >Wiew Cars</a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://maltapark.com/images/banners/banner2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Find your next home!</h1>
              <a href="#" >Wiew Properties</a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://maltapark.com/images/banners/banner3.jpg"
              alt="Jobs"
            />
            <Carousel.Caption>
              <h1>700 new jobs listed every week</h1>
              <a href="#" >Wiew Jobs</a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
