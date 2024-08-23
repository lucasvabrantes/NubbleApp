import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <Text italic bold preset="headingLarge">
          Lucas Abrantes
        </Text>
        <Button title="Entrar"></Button>
      </View>
    </SafeAreaView>
  );
}

export default App;
