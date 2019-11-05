import React, { Component, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, section, Col, Row } from "reactstrap";
import axios from "axios";
import { createSecureContext } from "tls";
import { Connect } from 'react-redux';

function getDatafrom(state) {
  return {
    serviceImagesData: state.dataCollection
  };
 }
class HomeCatlist extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     serviceImagesData:[]
  //   };
  // };
  state={
    serviceImagesData:[]
  }
  viewMatchSummary = key => {
    this.props.dispatch({
      type: "newValue",
      payload: key
    });
  };

  componentDidMount() {
    axios("https://api.imgur.com/3/account/me/images")
      .then( data => {
        const imageList = data.data.data;
        this.setState({
          // serviceImagesData: imageUrl.map(data => data).slice(0,3)
          serviceImagesData:imageList.map( data => data ).slice(1,4)
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
        <div className="col-md-4 col-sm-12 mb-3 services-cat position-relative">
          <div className="img-wrap">
            <img key={data.key} src={data.link} />
              <Link
                className="d-flex align-items-center justify-content-center"
                to="/services" onClick={() => this.viewMatchSummary(this.props.data)
                }
              >{data.title}</Link>
          </div>
        </div>
      )
      })
    ) : (
      <div className="text-center">Images not loaded yet</div>
    )
    return (
      <section className="services-home">
        <Container>
          <div className="row py-5">
            { serviceImages }
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
          </div>
        </Container>
      </section>
    );
  }
}

export default HomeCatlist;
