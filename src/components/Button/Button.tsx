import React from 'react';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {TouchableOpacityBox} from '../Box/Box';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16">
      <Text preset="paragraphMedium" bold style={{color: 'white'}}>
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
