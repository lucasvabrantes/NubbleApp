import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        backgroundColor: '#074C4E',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        height: 50,
      }}>
      <Text preset="paragraphMedium" bold style={{color: 'white'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
