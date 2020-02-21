import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import Banner from "./banner/Banner";
import HomeCatlist from "./home-category/HomeCatlist";
import Galleryslide from "./gallery/Galleryslide";
import Footer from "./Footer" ;
import BackgroundHeader from "./images/party.png";
import aboutImg from "./images/party.png";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutDesc: "",
      isFetching: false,
      catImg:[]
    };
  }
  componentDidMount() {
    axios("https://api.imgur.com/3/account/me/about/")
      .then(data => {
        // console.log(data.data.data[4].link,data.data.data[4].description);
        const contentTxt = data.data.data.bio;
        const homeImageUrl = data.data.data;
        this.setState({
          aboutDesc: contentTxt,
          catImg: homeImageUrl
        });
      })
      .catch(err => {
        console.log("error");
      });

      AOS.init({
        duration : 2000
      })

    // console.log(window.innerHeight);
  }

  render() {
    return (
      <div>
        <Banner />
        <HomeCatlist />
        <section className="about-home py-5">
          <Container>
            <div className="row">
              <div className="col-md-6 text-left">
                <h3 className="pb-2 mb-0" data-aos="fade-down">
                  About Us
                </h3>
                <h5 className="pb-1 mb-5" data-aos="fade-left">
                  Happiest moments with Colour of Joy
                </h5>
                <p className="pb-2 mb-0" data-aos="fade-up">
                  {this.state.aboutDesc}
                </p>
                <Link
                  className="readmore my-2 text-center"
                  to="/about"
                  data-aos="fade-up"
                >
                  Read More
                </Link>
              </div>
              <div className="col-md-6 text-left">
                <img
                  className="w-100"
                  data-aos="zoom-out"
                  src="../assets/images/200x150/wedding-stage.jpg"
                ></img>
              </div>
            </div>
          </Container>
        </section>
        <Galleryslide />
        {/* <section className="gallery-wrap mb-5">
          <Container>
            <Row className="mb-4">
              <Col md="4"><img className="img-fluid" src="../assets/images/party.png"></img></Col>
              <Col md="4"><img className="img-fluid" src={process.env.PUBLIC_URL+"assets/images/party.png"}></img></Col>
              <Col md="4"><img className="img-fluid" src={process.env.PUBLIC_URL+"assets/images/party.png"}></img></Col>
            </Row>
            <Row>
              <Col md="4"><img className="img-fluid" src={process.env.PUBLIC_URL+"assets/images/party.png"}></img></Col>
              <Col md="4"><img className="img-fluid" src={process.env.PUBLIC_URL+"assets/images/party.png"}></img></Col>
              <Col md="4"><img className="img-fluid" src={process.env.PUBLIC_URL+"assets/images/party.png"}></img></Col>
            </Row>
          </Container>
        </section> */}
      </div>
    );
  }
}

export default Home;
