import React from "react";
import Craosal from "../include/Craosal";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/esm/Container";
import "../../App.css";
import teacher1 from "../images/teacher1.jpg";
import teacher2 from "../images/teacher2.jpg";
import teacher3 from "../images/teacher3.jpg";
import teacher4 from "../images/teacher4.jpg";
import teacher5 from "../images/teacher5.jpg";
import teacher6 from "../images/teacher6.jpg";
import advertise from "../images/advertise.jpg"

function Home() {
  return (
    <>
      <Craosal />
      <section>
        <div className="container">
          <div className="row text-center">
            <h1>World Class Facilities</h1>
            <h4>
              Ask The Question, Learn With Perfection, Lead With Conviction
            </h4>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-3">
              <figure>
                <img
                  src="https://smartclass.dexignzone.com/xhtml/images/about/about-1.png"
                  alt=""
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-md-6  ">
              <h1 className="pt-5 text-primary">Ask whatever you want</h1>
              <p className="fs-4 pt-3">
                Get your exam related doubts and questions answered by
                experienced and qualified faculty
              </p>
              <ul className="fs-4 pt-3 lh-lg">
                <li>Stuck with subject related queries?</li>
                <li>Confused among lots of career choices? </li>
                <li>Looking for expert guidance in studies?</li>
                <li>Want latest notification about exams?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Container className="d-flex gap-4">
          <Card style={{ width: "25rem" }} className="m-0">
            <h3 className="bg-primary text-white p-3">Notification</h3>
            <ul className="lh-lg">
              <li>Cras justo odio</li>
              <li>Cras justo odio</li>
              <li>Cras justo odio</li>
              <li>Cras justo odio</li>
              <li>Cras justo odio</li>
              <li>Cras justo odio</li>
              <li>Cras justo odio</li>
              <li>Cras justo odio</li>
              <li>Cras justo odio</li>
            </ul>
          </Card>
          <Card style={{ width: "25rem" }} className="m-0">
            <h3 className="bg-primary text-white p-3">Events</h3>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                New SSC-CGL/10+2 batch starts from "24th of June at 7:00 AM" at
                Tonk Road branch,Jaipur.
              </ListGroup.Item>
              <ListGroup.Item>
                New SSC-CGL MAINS batch starts from "26th of June at 10:00 AM"
                at Gurjar ki thadi branch,Jaipur.
              </ListGroup.Item>
              <ListGroup.Item>
                New SSC-CGL/10+2 and Bank-PO/Clerk batch starts from "3rd of
                July at 7:00 AM" at Tonk Road Branch,Jaipur.
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Card style={{ width: "25rem" }} className="fs-4">
            <h3 className="bg-primary text-white p-3">Blog / Artical</h3>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Preparation Strategy for SSC-CGL</ListGroup.Item>
              <ListGroup.Item>
                SSC-CGL New brings more transparency.
              </ListGroup.Item>
              <ListGroup.Item>
                How to manage time for SSC examination
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Container>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Student Testimonial</h1>
              <p className="d-flex flex-wrap align-items-justify py-5 fs-4">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available
              </p>
            </div>
            <div className="col-md-6">
              <h1 >Meet our Teachers</h1>
              <div className="row pt-5 d-flex">
                <div className="col-md-4 ">
                  <figure >
                    <img src={teacher1} alt="" width={170} height={200} className="border rounded-3"/>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure>
                    <img src={teacher2} alt="" width={170} height={200} className="border rounded-3" />
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure>
                    <img src={teacher3} alt="" width={170} height={200} className="border rounded-3"/>
                  </figure>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-4">
                  <figure>
                    <img src={teacher4} alt="" width={170} height={200} className="border rounded-3"/>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure>
                    <img src={teacher5} alt="" width={170} height={200} className="border rounded-3"/>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure>
                    <img src={teacher6} alt="" width={170} height={200} className="border rounded-3"/>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <figure>
              <img
              src={advertise}
                alt=""
                className="img-fluid"

              />
              </figure>
            </div>
            <div className="col-md-6">
              <h6>Contact Form</h6>
              <hr />
              <div className="form-group">
                <label className="mb-1">Full Name</label>
                <input
                  type="text"
                  pattern="\d{10}"
                  maxlength="4"
                  className="form-control"
                  placeholder="Enter Full Name"
                ></input>
              </div>

              <div className="form-group">
                <label className="mb-1">Phone Number</label>
                <input
                  type="text"
                  pattern="\d{10}"
                  maxLength={10}
                  className="form-control"
                  placeholder="Enter Phone Number"
                ></input>
              </div>

              <div className="form-group">
                <label className="mb-1">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address"
                ></input>
              </div>

              <div className="form-group">
                <label className="mb-1">Messege</label>
                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Enter Messege"
                ></textarea>
              </div>

              <div className="form-group py-3">
                <button className="btn btn-primary shadow w-100" type="button">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
