import React ,{Component}from 'react';
import { form, control, button } from 'react-validation';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const Form = ({ getValues, validate, validateAll, showError, hideError, children, ...props }) => ( // destruct non-valid props
  <form {...props}>{children}</form>
);
class Login extends Component {
  
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }


  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return( 
    <section className="userlogwrap"> 

    
    <Col sm={4}>
        <h3 className="mb-4 mt-4 font-16">Please sign up.</h3>
        <Form id="signup-form">
        <FormGroup row>
          {/* <Label for="userName" sm={2}>User Name</Label> */}
          <Col sm={12}>
            <Input type="text" name="email" id="userName" placeholder="Enter Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
          <Col sm={12}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          {/* <Label for="userName" sm={2}>User Name</Label> */}
          <Col sm={12}>
            <Input type="text" name="user_phone" id="userPhone" placeholder="Enter Phone Number" />
          </Col>
        </FormGroup>
        <FormGroup row>
          {/* <Label for="examplePassword" sm={2}>Password</Label> */}
          <Col sm={12}>
            <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Col sm={{ size: 12 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                I Accept Terms and Policies
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 4, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </Col>
      </section>
      )
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  export default Signup;
  