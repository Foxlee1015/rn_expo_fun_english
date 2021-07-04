import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import { FlatList } from 'native-base'

import { prepositionTypes} from '../../data/local/prepositions'
import { navigate } from '../../navigationRef'
import { Context as PrepositionContext } from "../../context/PrepositionContext"
import Spacer from '../../components/Spacer'

const PrepositionTypeSelectScreen = ({ }) => {
  const { updateType } = useContext(PrepositionContext);
  
  const _onPress = (type) => {
    updateType(type)
    navigate('PrepositionList')
  }

  return (
    <Spacer margin={0} padding={100} height={'100%'}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
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
    </Spacer>
  );
};

PrepositionTypeSelectScreen.navigationOptions = {
  header: false
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
}});

export default PrepositionTypeSelectScreen;
