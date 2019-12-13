import React, { Component } from "react";
import {
  Jumbotron,
  Row,
  Col,
  Container,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  Card
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { createSecureContext } from "tls";
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["emailid"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Enter Name*.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "Enter alphabet characters only*.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "Enter email-ID*.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Enter valid email-ID*.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "Enter mobile no*.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "Enter valid mobile no*.";
      }
    }

    if (!fields["event"]) {
      formIsValid = false;
      errors["event"] = "Enter event*.";
    }

    if (typeof fields["event"] !== "undefined") {
      if (!fields["event"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["event"] = "Enter event*.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div>
        <footer className="pt-5 pb-2 contact-wrap">
          <Container fluid>
            <Row className="overflow-hidden">
              <Col md="4" sm="12" className="columns" data-aos="fade-right">
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15726.864485841474!2d76.4449833!3d9.7900702!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32d9ee5d42c86d3d!2sHappiest%20Weddings!5e0!3m2!1sen!2sin!4v1573217911385!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    frameborder="0"
                    style={{ border: "0" }}
                    allowfullscreen=""
                  ></iframe>
                </div>
              </Col>
              <Col
                md="4"
                sm="12"
                className="columns d-flex flex-column justify-content-start pt-3"
                data-aos="fade-up"
              >
                <h5 className="mb-4">Meet us</h5>
                <p>+919746150416</p>
                <p>
                  <i></i>contact@happiestweddings.com
                </p>
                <p>
                  Thalayolaparambu,
                  <br /> Vaikom, Kottayam, 686605
                </p>
              </Col>
              <Col
                md="4"
                sm="12"
                className="columns d-flex flex-column justify-content-start pt-3"
                data-aos="fade-left"
              >
                <h5 className="mb-4">Pitch us</h5>
                <p>Hello,</p>
                {/* <form onSubmit={this.mySubmitHandler}>
                <p><span>My name is</span> <input type="text" name="username" placeholder="Your Name" value={this.state.username} onChange={this.myChangeHandler} /> <span>and
                  my e-mail address is</span><input type="text" name='email' placeholder="Your Email" value={this.state.email} onChange={this.myChangeHandler} /><span>and i would like
                  to discuss about</span><input type="text" name='contact'  placeholder="Your Event" value={this.state.event} onChange={this.myChangeHandler} /><span>contact me on</span><input type="number" name='contact'  placeholder="Your phone number" value={this.state.contact} onChange={this.myChangeHandler} />
                </p>  
                
                
                
                  className="submit d-flex align-self-start"
                  type="submit"
                  value="Submit"
                >
                  <span>SUBMIT</span>
                </button>
                </form> */}

                <div id="main-registration-container">
                  <div id="register">
                    <form
                      method="post"
                      name="userRegistrationForm"
                      onSubmit={this.submituserRegistrationForm}
                    >
                     
                      <label>My name is</label>
                      <div className="form-wrap"> 
                      <div className="errorMsg">
                        {this.state.errors.username}
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Name"
                        name="username"
                        value={this.state.fields.username}
                        onChange={this.handleChange}
                      />
                      
                    </div>
                   
                    <label> and my E-mail ID is</label>
                      <div className="form-wrap">  
                      <div className="errorMsg">
                        {this.state.errors.emailid}
                      </div>
                      <input
                        type="text" className="no-txt-trfm"
                        placeholder="Enter Email"
                        name="emailid"
                        value={this.state.fields.emailid}
                        onChange={this.handleChange}
                      />
                      
                    </div>
                    <label>contact me on </label>
                    <div className="form-wrap">
                    <div className="errorMsg">
                        {this.state.errors.mobileno}
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Phone"
                        name="mobileno"
                        value={this.state.fields.mobileno}
                        onChange={this.handleChange}
                      />
                      
                    </div>
                    <label>and i would like to discuss about</label>
                    <div className="form-wrap">
                    <div className="errorMsg">{this.state.errors.event}</div>
                      <input
                        type="text"
                        placeholder="Your Event"
                        name="event"
                        value={this.state.fields.event}
                        onChange={this.handleChange}
                      />
                    </div>
                      <button type="submit" className="submit" value="Submit">
                        <span>SUBMIT</span>
                      </button>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center">
              <div className="col-sm-12 info-txt">
                <p className=" text-center my-3">
                  Copyright&nbsp;&nbsp;&copy;&nbsp;&nbsp;2018&nbsp;&nbsp;happiestweddings.com
                </p>
              </div>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}
export default Footer;
