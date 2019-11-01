import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button>To the Left!</Button>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </div>
  );
};

export default Example;