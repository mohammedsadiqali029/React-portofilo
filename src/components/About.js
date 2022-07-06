import React from "react";
import './About.css';

export default function About() {
  return (
    <div id="About">
    <section  className="About">
      <div className="heading">
        <h2>About Me</h2>
      </div>
      <div className="content">
        <div className="contentBx w50">
            <h3>I'm a Front End Web Developer.</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi quae distinctio dignissimos perferendis. Odio voluptatem doloremque a facere iusto, omnis consectetur dolorum, expedita aperiam, quidem aliquam cupiditate delectus qui minus repellat facilis excepturi deleniti! Laborum magnam incidunt quis alias itaque impedit obcaecati quisquam eligendi aliquid enim vel est, nesciunt repellendus quo quibusdam.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod sit quidem iure vel nam a, aperiam repellat culpa cum tempora perferendis dolor explicabo quaerat tempore exercitationem. Asperiores quam minus, in vero labore quibusdam sapiente temporibus sit cumque ea, et ipsum, maxime est.
            </p>
        </div>
          <div className="w50">
            <img className="img" src={require(".//images/Profile.jpg") }alt="Profile " areia-hidden='true' />
          </div>
      </div>
    </section>
    </div>
  );
}
