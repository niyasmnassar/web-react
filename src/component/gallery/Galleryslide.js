import React, { Component, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, section, Col, Row } from "reactstrap";
import axios from "axios";
import { createSecureContext } from "tls";

class Galleryslide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      galleryData: []
    };
  }
  componentDidMount() {
    axios("../data/gallery.json")
      .then(res => {
        const imageList = res.data;
        this.setState({
          // serviceImagesData: imageUrl.map(data => data).slice(0,3)
          galleryData: imageList.map(res => res).slice(0,4)
        });
        console.log(imageList);
      })
      .catch(err => {
        console.log("error");


      });
  }

  render() {
    const { galleryData } = this.state;
    const galleryImages = galleryData.length ? (
      galleryData.map(res => {
        return (
          <Col md="3" data-aos="flip-left">
            <img key={res.id} src={'../assets/images/200x150/' + res.thumbnailUrl} className="card-img-top" alt="avatar"></img>
          </Col>

        );
      })
    ) : (
      <div className="col-12 text-center">Contents not loaded yet</div>
    )
    return (
      <div>
          <section className="gallery-wrap py-5">
            <Container fluid>
            <h3 data-aos="fade-right" className="bar-title mb-3"><span>Recent</span> Works</h3>
              <Row className="form-row">
                { galleryImages }
              </Row>
            </Container>
          </section>
      </div>
    )
  }
}

export default Galleryslide;
