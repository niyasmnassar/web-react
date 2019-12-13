import React ,{Component}from 'react';
import Galleryslide from "./gallery/Galleryslide";
import SubBanner from "./SubBanner" ;
import { Jumbotron, Container, Button,InputGroup, InputGroupAddon, Input, Card } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Ourworks extends Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
    render() {
      return (
          <div>
            <SubBanner />
            <Galleryslide/>
          </div>
      );
    }
  }
  
  export default Ourworks;