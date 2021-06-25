import React from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const VerbForm = () => {

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
        />
      </Spacer>
      <Spacer>
          <Button title="Stop" onPress={()=>{}} />
      </Spacer>
    </>
  );
};

export default VerbForm;
