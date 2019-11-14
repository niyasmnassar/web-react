import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  Card
} from "reactstrap";
import axios from "axios";
import { createSecureContext } from "tls";
class SubBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      subBannerImg: [
        {
          cover: process.env.PUBLIC_URL + "assets/images/banner.jpg"
        }
      ]
    };
    // this.myRef = React.createRef();
  }
  componentDidMount() {
    axios("https://api.imgur.com/3/account/me/about/")
    
      .then(data => {
        const contentTitle = data.data.data.url;
        const contentTxt = data.data.data.bio;
        const homeImageUrl = data.data.data.cover;
        console.log(data.data.data);
        this.setState({
          aboutTitle: contentTitle,
          aboutDesc: contentTxt,
          bannerBg: homeImageUrl
        });
      })
      .catch(err => {
        console.log("error");
      });

    // console.log(window.innerHeight);
  }
  render() {
    // const { subBannerUrl } = this.state;
    const { bannerBg } = this.state;
    return (
      <div>
        <section
          className="mb-4 sub-banner center-position height-350 d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundImage: `url(${bannerBg})` }}
        ></section>
      </div>
    );
  }
}
export default SubBanner;
