import React, {useEffect} from 'react'
import {FlatList} from 'react-native'
import {Button, Text} from 'native-base'
import Spacer from '../../components/Spacer'

const PrepositionAdvancedDetailCard = ({data}) => {
    return (
      <Spacer>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
            <Spacer>
            <Button >
              {item.title}
            </Button>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={item.examples}
            renderItem={({ item }) => (
            <>
            <Text >
              {item}
                </Text>
              </>
            )}
            keyExtractor={item => item}
          />
              </Spacer>
            )}
            keyExtractor={item => item}
          />
      </Spacer>
    )
}
 
export default PrepositionAdvancedDetailCard
