import React ,{Component}from 'react';
import { Jumbotron, Container, Button,InputGroup, InputGroupAddon, Input, Card } from 'reactstrap';
import SubBanner from "./SubBanner" ;
import axios from "axios";
// import jsonResponse from ""
import { createSecureContext } from "tls";
class About extends Component {
  constructor (props) {
    
    super(props);
    this.state = {
      isFetching: false,
      aboutData: []
    };
    // this.myRef = React.createRef();
  }
  
  componentDidMount() {
    axios("../data/sliders.json")
      .then( res => {
        const imageList = res.data;
        this.setState({
          // serviceImagesData: imageUrl.map(data => data).slice(0,3)
          aboutData:imageList.map( res => res )
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
        aboutData.map((res) => {
        return (
        <div className="col-md-3">
          <div className="card">
            <div className="img-wrap p-4">
              <img key={res.id} src={'../assets/images/' + res.profilePic} className="card-img-top" alt="avatar"></img>
            </div>
            <div className="card-body">
              <h5 className="card-title">{res.title}</h5>
              <p className="card-text">{res.body}</p>
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
                <div className="row justify-content-center">
                { aboutContents }
                </div>
              </div>
            </section>
          </div>
      );
    }
  }
  export default About;