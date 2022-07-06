import React from "react";
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="Heading">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          nesciunt laudantium numquam, at cumque optio consequatur ut dolores
          quo unde maiores possimus, totam culpa molestias tenetur ea! Ratione,
          velit soluta?
        </p>
      </div>
      <div className="Columns">
      <div className="content">
        <div className="contactInfo">
          <h3>Contact Info</h3>
          <div className="contactInfoBx">
            <div className="box">
              <div className="icon">
                  <i className="fa fa-map-marker"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  Near SPV NPA, <br /> Hyderabad, Telangana, India - <br />
                  500052
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                  <i className="fa fa-phone"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>
                  63029-02680
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                  <i className="fa fa-envelope-o"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>
                  mohammedsadiqali029@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="formBx">
          <form action="">
              <h3>Message Me</h3>
              <input type="text" name="" placeholder="Full Name"/>
              <input type="email" name="" placeholder="E-mail"/>
              <textarea placeholder="Your Message"></textarea>
              <input type="submit" value="Send"/>
          </form>
      </div>
      </div>
    </section>
  );
}
