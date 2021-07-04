import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

import { navigate } from '../../navigationRef'
import { Context as PrepositionContext } from "../../context/PrepositionContext"

const PrepositionTypeSelectScreen = ({ }) => {
  const { updateType } = useContext(PrepositionContext);
  
  const _onPress = (type) => {
    updateType(type)
    navigate('PrepositionList')
  }

  return (
    <>
      <Button
        title={"place"}
        variant="unstyled"
        onPress={() => _onPress('place')}
      />
      
      <Button
        title={"number"}
        variant="unstyled"
        onPress={() => _onPress('number')}
      />
      
      <Button
        title={"time"}
        variant="unstyled"
        onPress={() => _onPress('time')}
      />
    </>
  );
};

PrepositionTypeSelectScreen.navigationOptions = {
  header: false
};

const styles = StyleSheet.create({});

export default PrepositionTypeSelectScreen;
