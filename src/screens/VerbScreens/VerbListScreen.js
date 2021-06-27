import React, {useContext} from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as VerbContext } from '../../context/VerbContext';

const VerbListScreen = ({ navigation }) => {
  const { state, fetchVerbs } = useContext(VerbContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchVerbs} />
      <FlatList
        data={state}
        keyExtractor={item => item.present}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View key={item.id}>
                <Text onPress={() =>
                  navigation.navigate('VerbDetail', { _id: item.id })
                }>{item.present}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

VerbListScreen.navigationOptions = {
  title: 'Verbs1'
};

const styles = StyleSheet.create({});

export default VerbListScreen;
