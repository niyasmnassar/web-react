import React ,{Component}from 'react';
import { Jumbotron, Container, Button,InputGroup, InputGroupAddon, Input, Card } from 'reactstrap';
import SubBanner from "./SubBanner" ;
import axios from "axios";
import { createSecureContext } from "tls";
class About extends Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     isFetching: false,
  //     aboutData: []
  //   };
  //   // this.myRef = React.createRef();
  // }
  state={
    aboutData:[]
  }
  componentDidMount() {
    axios("https://api.imgur.com/3/account/me/about/")
      .then( data => {
        const imageList = data.data.data;
        this.setState({
          // serviceImagesData: imageUrl.map(data => data).slice(0,3)
          aboutData:imageList.map( data => data )
        });
        console.log( imageList );
      })
      .catch(err => {
        console.log("error");
      });
  }

    render() {
      const { aboutData } = this.state;
      const aboutContents = aboutData.length ? (
        aboutData.map( data => {
        return (
        <div className="col-md-4">
          <div className="card">
            <img src={data.avatar} className="card-img-top" alt="avatar"></img>
            <div className="card-body">
              <h5 className="card-title">{data.url}</h5>
              <p className="card-text">{data.bio}</p>
              
            </div>
          </div>
        </div>
        )
      })
      ) : (
        <div className="col-12 text-center">Contents not loaded yet</div>
      )
      return (
          <div>
            <SubBanner />
            <section className="about-wrap">
              <div className="container-fluid">
                <div className="row">
                  <div className="col text-center">
                    <h2>{this.state.aboutTitle}</h2>
                    <p>{this.state.aboutDesc}</p>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <h3>Team Members</h3>
                  </div>
                </div>
                <div className="row">
                { aboutContents }
                </div>
              </div>
            </section>
          </div>
      );
    }
  }
  export default About;