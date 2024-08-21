import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>AMO REACT NATIVE</Text>
    </SafeAreaView>
  );
}

export default App;
