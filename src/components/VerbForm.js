import React, { useState, useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch } from "react-native-elements";
import { Input, Button } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

import { Context as VerbContext } from "../context/VerbContext"
import Spacer from './Spacer';
import useTextInput from '../hooks/useTextInput';

const VerbForm = () => {
  const { createVerb } = useContext(VerbContext);
  const presentInput = useTextInput({label:"Verb Present"});
  const pastInput = useTextInput({label:"Verb Past"});
  const participleInput = useTextInput({label:"Verb Participle"});

  const [published, setPublished] = useState(false);
  const [isIrregular, setIsIrregular] = useState(false);
  const [learnLevel, setLearnLevel] = useState(0);

  const onSubmit = () => {
    createVerb({
      present: presentInput.value,
      past: pastInput.value,
      participle: participleInput.value, 
      learnLevel, isIrregular
    }) 
  }

  return (
    <>
      <Spacer>
        <Spacer>
          <Input {...presentInput} />
        </Spacer>
        <Spacer>
          <Input {...pastInput} />
        </Spacer>
        <Spacer>
          <Input {...participleInput} />
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
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={learnLevel}
            onValueChange={(itemValue, itemIndex) =>
              setLearnLevel(itemValue)
            }>
            <Picker.Item label="Beginner" value={0} />
            <Picker.Item label="Low Intermediate" value={1} />
            <Picker.Item label="Middle Intermediate" value={2} />
            <Picker.Item label="High Intermediate" value={3} />
            <Picker.Item label="advanced" value={4} />
          </Picker>
        </View>
        
      </Spacer>
      <Spacer>
          <Button title="Add" type="outline" onPress={()=>onSubmit()} />
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
  },
  pickerBox: {
    alignItems: 'center'
  }
});

export default VerbForm;