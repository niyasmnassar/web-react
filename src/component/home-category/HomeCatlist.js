import React, { Component, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, section, Col, Row } from "reactstrap";
import axios from "axios";
import { createSecureContext } from "tls";
import { Connect } from "react-redux";

function getDatafrom(state) {
  return {
    categoryData: state.gallery
  };
}
class HomeCatlist extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     serviceImagesData:[]
  //   };
  // };
  state = {
    categoryData: []
  };
  viewMatchSummary = key => {
    this.props.dispatch({
      type: "newValue",
      payload: key
    });
  };

  componentDidMount() {
    axios("../data/category.json")
      .then(res => {
        const imageList = res.data;
        this.setState({
          // serviceImagesData: imageUrl.map(data => data).slice(0,3)
          categoryData: imageList.map(res => res).slice(0, 4)
        });
        console.log(imageList);
      })
      .catch(err => {
        console.log("error");
      });
  }

  render() {
    const { categoryData } = this.state;
    const categoryImages = categoryData.length ? (
      categoryData.map((res, i) => {
        return (
          <div key={i}
            data-aos="zoom-in"
            className="col-md-3 col-sm-12 col-sm-mb-3 services-cat position-relative"
          >
            <div className="img-wrap">
              <img key={res.id} src={'../assets/images/200x150/' + res.thumbnailUrl} />
              <Link
                className="d-flex align-items-center justify-content-center"
                to="/services"
                onClick={() => this.viewMatchSummary(this.props.data)}
              >
                {res.title}
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <div className="text-center">Images not loaded yet</div>
    );
    return (
      <section className="services-home py-4">
        <Container fluid>
          <h3 data-aos="fade-right" className="bar-title mb-3"><span>Our</span> Services</h3>
          <Row className="form-row">
            {categoryImages}
            {/* <div className="col-4 services-cat position-relative">
                <img className="img-fluid" src={process.env.PUBLIC_URL+"assets/images/party.png"}/>
                <div className="layer-wrap d-flex align-items-center text-center">  
                  <Link className="d-flex align-items-center justify-content-center" to="/services">Entertainments</Link >
                </div>
              </div>
              <div className="col-4 services-cat position-relative">
                  <img className="img-fluid" src={process.env.PUBLIC_URL+"assets/images/party.png"}/>
                  <div className="layer-wrap d-flex align-items-center text-center">  
                    <Link className="d-flex align-items-center justify-content-center" to="/services">Catering Services</Link >
                  </div>
              </div> */}
          </Row>
        </Container>
      </section>
    );
  }
}

export default HomeCatlist;
