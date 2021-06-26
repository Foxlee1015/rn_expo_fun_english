import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as VerbContext } from '../context/VerbContext';

import { ListItem } from 'react-native-elements';

const VerbListScreen = ({ navigation }) => {
  const { state, fetchVerbs } = useContext(VerbContext);

  useEffect(()=>{
    console.log("state ", state)
  },[state])

  return (
    <>
      <NavigationEvents onWillFocus={fetchVerbs} />
      <Text>ㅋㅋㅋ</Text>
      <FlatList
        data={state}
        keyExtractor={item => item.present}
        renderItem={({ item }) => {
          console.log('ii', item);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('VerbDetail', { id: item.id })
              }
            > <ListItem key={item.id} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.present}</ListItem.Title>
                <ListItem.Subtitle>{item.past}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

VerbListScreen.navigationOptions = {
  title: 'Verbs'
};

const styles = StyleSheet.create({});

export default VerbListScreen;
