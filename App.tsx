import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{padding: 10}}>
          <Text italic bold preset="headingLarge">
            Lucas Abrantes
          </Text>
          <Button title="Login"></Button>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
