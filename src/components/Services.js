import React from "react";
import "./Services.css";


export default function Services() {
  return (
    <section id="Services" className="services">
      <div className="Heading">
        <h2>Our services</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, odit?
          Voluptatum consequatur quod pariatur expedita mollitia architecto sint
          fuga modi?
        </p>
      </div>
          <div className="container">
            <div className="card">
              <div className="classHeader">
                <img className="cardImg" src={require("./images/icon1.png")} alt="" srcset="" width="600"/>
              </div>
                <div className="cardBody">
                  <h4>Web Development</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi ducimus sed hic asperiores repellendus harum modi iste laboriosam blanditiis totam et repudiandae. Eos quaerat odit labore voluptate, architecto distinctio eum nam quis optio?</p>
                </div>
            </div>
            <div className="card">
              <div className="classHeader">
                <img className="cardImg" src={require("./images/icon2.png")} alt="" srcset="" width="600"/>
              </div>
                <div className="cardBody">
                  <h4>Web Design</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi ducimus sed hic asperiores repellendus harum modi iste laboriosam blanditiis totam et repudiandae. Eos quaerat odit labore voluptate, architecto distinctio eum nam quis optio?</p>
                </div>
            </div>
            <div className="card">
              <div className="classHeader">
                <img className="cardImg" src={require("./images/icon5.png")} alt="" srcset="" width="600"/>
              </div>
                <div className="cardBody">
                  <h4>Content Writing</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi ducimus sed hic asperiores repellendus harum modi iste laboriosam blanditiis totam et repudiandae. Eos quaerat odit labore voluptate, architecto distinctio eum nam quis optio?</p>
                </div>
            </div>
            <div className="card">
              <div className="classHeader">
                <img className="cardImg" src={require("./images/icon4.png")} alt="" srcset="" width="600"/>
              </div>
                <div className="cardBody">
                  <h4>Photography</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi ducimus sed hic asperiores repellendus harum modi iste laboriosam blanditiis totam et repudiandae. Eos quaerat odit labore voluptate, architecto distinctio eum nam quis optio?</p>
                </div>
            </div>
            <div className="card">
              <div className="classHeader">
                <img className="cardImg" src={require("./images/icon3.png")} alt="" srcset="" width="600"/>
              </div>
                <div className="cardBody">
                  <h4>Android Application</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi ducimus sed hic asperiores repellendus harum modi iste laboriosam blanditiis totam et repudiandae. Eos quaerat odit labore voluptate, architecto distinctio eum nam quis optio?</p>
                </div>
            </div>
            <div className="card">
              <div className="classHeader">
                <img className="cardImg" src={require("./images/icon2.png")} alt="" srcset="" width="600"/>
              </div>
                <div className="cardBody">
                  <h4>Video Editing</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi ducimus sed hic asperiores repellendus harum modi iste laboriosam blanditiis totam et repudiandae. Eos quaerat odit labore voluptate, architecto distinctio eum nam quis optio?</p>
                </div>
            </div>
          </div>

    </section>
  );
}
