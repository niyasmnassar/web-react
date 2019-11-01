import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Jumbotron, Container } from "reactstrap";
import axios from "axios";
import { createSecureContext } from "tls";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerDetails: [{
        link:process.env.PUBLIC_URL + "assets/images/banner.jpg"
      }]
    };

    this.myRef = React.createRef();
  }
  componentDidMount() {
    axios
      .get("https://api.imgur.com/3/account/me/images")
      .then(data => {
        const imageUrl = data.data.data;
        this.setState({
          bannerDetails: imageUrl.map(data => data)
        });
        console.log(data.data.data);
      })
      .catch(err => {
        console.log("error");
      });
    // window.onscroll = function() {
    //   var currentScrollPos = window.pageYOffset;
    //   if (currentScrollPos > 100) {
    //     document.getElementById("fixed-nav").classList.add("bgtrans");
    //   } else {
    //     document.getElementById("fixed-nav").classList.remove("bgtrans");
    //   }
    // };

    // function resize() {
    //   var heights = window.innerHeight;
    //   document.getElementById("banner").style.height = heights + "px";
    // }
    // resize();
    // window.onresize = function() {
    //   resize();
    // };
  }

  render() {
    const { imageURL } = this.state;
    const { height } = window.innerHeight;
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
      const { onClick } = props;
      return <i className="ti-angle-right next-slide" onClick={onClick}></i>;
    };
    function SamplePrevArrow(props) {
      const { onClick } = props;
      return <i className="ti-angle-left prev-slide" onClick={onClick}></i>;
    };

    return (
      <section id="banner" className="banner position-relative">
        <Slider {...settings}>
          {this.state.bannerDetails.map((data, index) => (
            <div className="">
              <div
                className="bg-banner"
                style={{
                  backgroundImage: `url(${data.link})`,
                  height: window.innerHeight
                }}
              >
                <div className="text-center bnrCont">
                  <div className="col-md-6 m-auto">
                    <h2 key={'mykey' + index} className="display-3">{data.title}</h2>
                    <p className="lead">{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    );
  }
}

export default Banner;
