import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
function Footers() {
  return (
    <section className="bg-dark">
      <div className="container py-3">
        <div className="row text-white">
          <div className="col-lg-4 col-md-6 lh-lg">
            <h5>Contact US</h5>
            <hr  width={100} />
            <ul>
              <li>Spring Store London Oxford Street, 012 United Kingdom</li>
              <li>Mobile: +00 1234 456789</li>
              <li>Mail: info@example.com</li>
              <li>Fax: 000 123 2294 089</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 lh-lg">
            <h5>Useful Links</h5>
            <hr  width={100} />
            <ul>
              <li>B.com</li>
              <li>M.Com</li>
              <li>BCA</li>
              <li>Computer</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 lh-lg">
            <h5>Recent Post</h5>
            <hr  width={100} />
            <ul>
              <li>Preparation Strategy for SSC</li>
              <li>New Pattern of SSC-CGL brings.</li>
              <li>How to manage time for SSC</li>
              <li>How to manage time for SSC</li>
            </ul>
          </div>
        </div>
        <div className="row text-center ">
          <div className="col-lg-3 col-md-2">
            <BsFacebook className="fs-1 text-white"/>
          </div>
          <div className="col-lg-3 col-md-2">
            <BsInstagram className="fs-1 text-white"/>
          </div>
          <div className="col-lg-3 col-md-2">
            <BsLinkedin className="fs-1 text-white"/>
          </div>
          <div className="col-lg-3 col-md-2">
            <BsTwitter className="fs-1 text-white"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footers;
