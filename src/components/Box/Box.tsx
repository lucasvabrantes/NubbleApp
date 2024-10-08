import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';
import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  SpacingProps,
  LayoutProps,
  BorderProps,
  SpacingShorthandProps,
  spacingShorthand,
  spacing,
  layout,
  border,
} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

export const Box = createBox<Theme>();

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
