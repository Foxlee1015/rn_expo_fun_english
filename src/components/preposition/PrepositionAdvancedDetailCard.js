import React, {useEffect} from 'react'
import {FlatList} from 'react-native'
import {Text} from 'native-base'
import Spacer from '../../components/Spacer'

const PrepositionAdvancedDetailCard = ({data}) => {
    return (
      <Spacer margin={0}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
              <Spacer>
                <Text>{item.title}</Text>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={item.examples}
                  renderItem={({ item }) => <Text>{item}</Text>}
                  keyExtractor={item => item}
                />
              </Spacer>
            )}
            keyExtractor={item => item.title}
          />
      </Spacer>
    )
}
 
export default PrepositionAdvancedDetailCard
