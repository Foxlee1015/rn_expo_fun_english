import React from 'react';
import { StyleSheet, View  } from 'react-native';
import { Switch } from "react-native-elements";
import { Button } from 'react-native-elements';

const SwitchButton = ({value, setValue, leftLabel, rightLabel, labelStyle="outline"}) => {
  return (
    <View style={styles.switchLabelBox}>
        <Button title={leftLabel} type={labelStyle} onPress={()=>setValue(false)} />
        <Switch
        color="#2089dc"
        value={value}
        onValueChange={() => setValue(!value)}
        />
        <Button title={rightLabel} type={labelStyle} onPress={()=>setValue(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  switchLabelBox: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default SwitchButton;