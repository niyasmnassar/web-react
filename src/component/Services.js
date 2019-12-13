import React ,{Component}from 'react';
import { Jumbotron, Container, Button,InputGroup, InputGroupAddon, Input, Card } from 'reactstrap';
import SubBanner from "./SubBanner" ;
import HomeCatlist from "./home-category/HomeCatlist";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Services extends Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
    render() {
      return (
          <div>
            <SubBanner />
            <HomeCatlist />
          </div>
      );
    }
  }
  
  export default Services;