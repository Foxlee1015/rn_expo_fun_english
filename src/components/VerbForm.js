import React, { useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch } from "react-native-elements";
import { Input, Button, Text } from 'react-native-elements';
import Spacer from './Spacer';

const VerbForm = () => {
  const [published, setPublished] = React.useState(false);
  const [present, setPresent] = useState('');
  const [past, setPast] = useState('');
  const [participle, setParticiple] = useState('');
  const [isIrregular, setIsIrregular] = useState(false);
  const [learnLevel, setLearnLevel] = useState(0);

  return (
    <>
      <Spacer>
        <Spacer>
          <Input
            label="Verb Present"
            value={present}
            onChangeText={setPresent}
            autoCorrect={false}
          />
        </Spacer>
        <Spacer>
          <Input
            label="Verb Past"
            value={past}
            onChangeText={setPast}
            autoCorrect={false}
          />
        </Spacer>
        <Spacer>
          <Input
            label="Verb Participle"
            value={participle}
            onChangeText={setParticiple}
            autoCorrect={false}
          />
        </Spacer>
        <View style={styles.bottomContainer}>
          <View style={styles.switchLabelBox}>
            <Button title="Regular Verb" type="outline" onPress={()=>setIsIrregular(false)} />
            <Switch
              color="#2089dc"
              value={isIrregular}
              onValueChange={() => setIsIrregular(!isIrregular)}
            />
            <Button title="Irregular Verb" type="outline" onPress={()=>setIsIrregular(true)} />
          </View>
          <View style={styles.switchLabelBox}>
            <Button title="Not Public" type="outline" onPress={()=>setPublished(false)} />
            <Switch
              color="#2089dc"
              value={published}
              onValueChange={() => setPublished(!published)}
            />
            <Button title="Public" type="outline" onPress={()=>setPublished(true)} />
          </View>
        </View>
        
      </Spacer>
      <Spacer>
          <Button title="Add" type="outline" onPress={()=>{}} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  switchLabelBox: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default VerbForm;