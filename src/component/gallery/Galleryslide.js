import React, { Component, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container,section,Col,Row } from "reactstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from "./photos";
import axios from "axios";
import { createSecureContext } from "tls";


class Galleryslide extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     originalArray: []
  //   }
  // }
  state={
    serviceImagesData:[]
  }
  componentDidMount() {
    axios("https://api.imgur.com/3/account/me/images")
      .then( data => {
        const imageList = data.data.data;
        this.setState({
          // serviceImagesData: imageUrl.map(data => data).slice(0,3)
          serviceImagesData:imageList.map( data => data )
        });
        console.log( imageList );
      })
      .catch(err => {
        console.log("error");
      });
  }


  render() {
    const { serviceImagesData } = this.state;
    const serviceImages = serviceImagesData.length ? (
      serviceImagesData.map((data, index) => {
        return(
          <Col sm="6" md="3">
            <div className="gal-wrap">
              <img className="" src={data.link}></img>
              {/* <Link className="d-flex align-items-center justify-content-center" to="/services">Decor &amp; Designs</Link > */}
            </div>
          </Col>
        )
      })
      ):(
      <div className="col-12 text-center">Images Not Yet Loaded</div>
      )
      return(
        <section className="gallery-wrap mb-4">
          <Container fluid>
          <Row className="form-row">
          { serviceImages }
          </Row>
          </Container>
        </section>
      )
  }
}

export default Galleryslide;
