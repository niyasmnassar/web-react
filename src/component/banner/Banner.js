import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../dist/css/animate.min.css"
import { Animated } from "react-animated-css";
// import OwlCarousel from "react-owl-carousel2";
// import "../../dist/css/owl.carousel.css";
// import "../../dist/css/owl.theme.default.css";

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
      .get("../data/banner.json")
      .then(res => {
        const imageUrl = res.data;
        this.setState({
          bannerDetails: imageUrl.map(res => res)
        });
        console.log(res.request.data);
      })
      .catch(err => {
        console.log("error");
      });

    function resize() {
      var heights = window.innerHeight;
      document.getElementById("banner").style.height = heights + "px";
    }
    resize();
    window.onresize = function() {
      resize();
    };
  }

  render() {
    const { imageURL } = this.state;
    const { height } = window.innerHeight;
    // const options = {
    //   items: 1,
    //   nav: true,
    //   rewind: true,
    //   autoplay: true,
    //   vertical: true,
    //   animateOut: "slideOutUp",
    //   animateIn: "slideInUp"
    // };
 
    // const events = {
    //   onDragged: function(event) {
    //     console.log("onDragged: " + event.type);
    //   },
    //   onChanged: function(event) {
    //     console.log("onChanged: " + event.type);
    //   },
    //   onTranslate: function(event) {
    //     console.log("onTranslate: " + event.type);
    //   }
    // };
    var settings = {
      fade: true,
      auto: true,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1000,
      vertical: true,
      verticalSwiping: true,
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
        {/* <OwlCarousel ref="car" options={options} events={events}>
          {this.state.bannerDetails.map((res, index) => (
            <div
              className="bg-banner"
              style={{
                backgroundImage: `url(${"../assets/images/banner/" + res.url})`,
                height: window.innerHeight
              }}
            >
              <div className="text-center bnrCont">
                <div className="col-md-6 m-auto">
                  <h2 key={"mykey" + index} className="display-3">
                    {res.title}
                  </h2>
                  <p className="lead">{res.body}</p>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel> */}
        <Slider {...settings}>
          {this.state.bannerDetails.map((res, i) => (
            <div className="" key={i}>
              <div
                className="bg-banner"
                style={{
                  backgroundImage: `url(${"../assets/images/banner/" +
                    res.url})`,
                  height: window.innerHeight
                }}
              >
                <div className="text-center bnrCont">
                  <div className="col-md-6 m-auto">
                   
                    <h2
                      key={"mykey" + i}
                    >
                      {res.title}
                    </h2>
                   
                    <p>
                      {res.body}
                    </p>
                   
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
