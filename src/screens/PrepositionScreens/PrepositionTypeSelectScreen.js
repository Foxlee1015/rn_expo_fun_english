import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import { FlatList } from 'native-base'

import { prepositionTypes} from '../../data/local/prepositions'
import { navigate } from '../../navigationRef'
import { Context as PrepositionContext } from "../../context/PrepositionContext"

const PrepositionTypeSelectScreen = ({ }) => {
  const { updateType } = useContext(PrepositionContext);
  
  const _onPress = (type) => {
    updateType(type)
    navigate('PrepositionList')
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={prepositionTypes}
      renderItem={({item}) => (
        <Button
          title={item}
          variant="unstyled"
          onPress={() => _onPress(item)}
        />
      )}
      keyExtractor={item => item}
    />
  );
};

PrepositionTypeSelectScreen.navigationOptions = {
  header: false
};

const styles = StyleSheet.create({});

export default PrepositionTypeSelectScreen;
