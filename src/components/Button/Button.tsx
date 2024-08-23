import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
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
