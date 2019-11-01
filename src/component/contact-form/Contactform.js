import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const Contactform = (props) => {
  return (
      <section className="contact-form pt-5 pb-5">
        <Container>  
        <Form inline>
            
                <div className="col-md-12 d-flex flex-row mb-4">
                      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">Hi! My name is</Label>
                        <Input type="text" name="username" id="userName" placeholder="Enter your name" />
                        </FormGroup>
                      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">I would like to register </Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="My Email" />
                      </FormGroup>
                      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2"> Contact me on</Label>
                        <Input type="text" name="userphone" id="userPhone" placeholder="Phone Number" />
                    </FormGroup>
                </div>
                    
                <div className="col-md-12 text-center">    
                    <Button className="btn-submit">Submit</Button>
                </div>
        </Form>
        </Container>
      </section>
    
  );
};

export default Contactform;