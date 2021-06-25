import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';

const TrackListScreen = ({  }) => {

    return ( <Text>List</Text>)
//   return (
//     <>
//       <NavigationEvents onWillFocus={fetchTracks} />
//       <FlatList
//         data={state}
//         keyExtractor={item => item._id}
//         renderItem={({ item }) => {
//           return (
//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate('TrackDetail', { _id: item._id })
//               }
//             >
//               <ListItem chevron title={item.name} />
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </>
//   );
};

TrackListScreen.navigationOptions = {
  title: 'Verbs'
};

const styles = StyleSheet.create({});

export default TrackListScreen;
