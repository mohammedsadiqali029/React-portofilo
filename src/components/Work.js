import React from "react";
import './Work.css'

export default function Work() {
  return (
    <section id="Work" className="work">
      <div className="heading">
        <h2>Our Latest Work</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore
          exercitationem, voluptates reprehenderit nemo consequatur asperiores
          odio, ipsam voluptatibus, quisquam est eligendi ratione deserunt magni
          reiciendis? Amet exercitationem est sunt?
        </p>
      </div>
      <div className="content">
          <div className="workBx">
              <img src={require(".//images/product (1).jpg")} alt="product" srcset="" />
          </div>
          <div className="workBx">
              <img src={require(".//images/product (2).jpg")} alt="product" srcset="" />
          </div>
          <div className="workBx">
              <img src={require(".//images/product (3).jpg")} alt="product" srcset="" />
          </div>
          <div className="workBx">
              <img src={require(".//images/product (4).jpg")} alt="product" srcset="" />
          </div>
      </div>
      <div className="heading">
          <a href="http://" target="_blank" rel="noopener noreferrer" className="btn">View More</a>
      </div>
    </section>
  );
}
