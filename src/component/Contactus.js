import React ,{Component}from 'react';
import { Jumbotron,Row,Col, Container, Button,InputGroup, InputGroupAddon, Input, Card } from 'reactstrap';
import SubBanner from "./SubBanner" ;

class Contactus extends Component {
  
    render() {
      return (
          <div>
            <SubBanner />
            <section className="contact-wrap">
              <Container fluid>
                <Row className="overflow-hidden">
                  <Col md="4" sm="12" className="columns" data-aos='fade-right'>
                    <div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15726.864485841474!2d76.4449833!3d9.7900702!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32d9ee5d42c86d3d!2sHappiest%20Weddings!5e0!3m2!1sen!2sin!4v1573217911385!5m2!1sen!2sin" width="100%" height="200" frameborder="0" style={{border:'0'}} allowfullscreen=""></iframe></div>
                  </Col>
                  <Col md="4" sm="12" className="columns bg-grey d-flex flex-column justify-content-start pt-3" data-aos='fade-up'>
                    <h5 className="mb-4">Meet us</h5>
                    <p>+919746150416</p>
                    <p><i></i>contact@happiestweddings.com</p>
                    <p>Thalayolaparambu,<br/> Vaikom, Kottayam, 686605</p>
                  </Col>
                  <Col md="4" sm="12" className="columns d-flex flex-column justify-content-start pt-3" data-aos='fade-left'>
                    <h5 className="mb-4">Pitch us</h5>
                    <p>Hello,</p>
                    <p className="mb-4">My name is <input type="text" value="your name"></input> and my e-mail address is<input type="text" value="your email"></input>and i would like to discuss about<input type="text" value="my event"></input> </p>
                    <button className="submit d-flex align-self-start" type="submit" value="Submit"><span>SUBMIT</span></button>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
      );
    }
  }
  
  export default Contactus;