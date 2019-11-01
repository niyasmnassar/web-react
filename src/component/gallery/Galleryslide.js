import React, { Component, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container,section,Col,Row } from "reactstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from "./photos";
import axios from "axios";
import { createSecureContext } from "tls";


class Galleryslide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalArray: []
    }
  }
  
  componentDidMount() {
    axios("https://api.imgur.com/3/account/me/images")
      .then(data => {
        const galleryImageUrl = data.data.data;
        this.setState({
          galleryImages: galleryImageUrl.map(data => data)
        });
        const dataImage = this.state.srcurl;
        var photos = [];
        dataImage.forEach(element => {
          // var x = [];
          // x['src'] = element;
          // x['width'] = 4;
          // x['height'] = 3;
          var x = {
            src: element,
            width: 4,
            height: 3,
          };
        photos.push(x);
        });
        console.log(photos);
      })
      .catch(err => {
        console.log("error");
      });
  }

  render() {
    return (
      
      <section className="gallery-wrap mb-4">
        <Gallery photos={photos} />
        {/* {this.state.serviceImages.map(data => (
          
          <Col sm="6" md="3" xl="2">
            <img className="img-fluid" src={data.link}></img>
            <Link className="d-flex align-items-center justify-content-center" to="/services">Decor &amp; Designs</Link >
          </Col>
          
        ))} */}

      


      </section>
    );
  }
}

export default Galleryslide;
