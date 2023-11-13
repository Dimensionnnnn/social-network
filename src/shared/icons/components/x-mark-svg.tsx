import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
export const SvgXMark = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <G
      fill="currentColor"
      fillRule="evenodd"
      clipPath="url(#a)"
      clipRule="evenodd">
      <Path d="M3.22 3.22a.75.75 0 0 1 1.06 0l12.5 12.5a.75.75 0 1 1-1.06 1.06L3.22 4.28a.75.75 0 0 1 0-1.06Z" />
      <Path d="M16.78 3.22a.75.75 0 0 1 0 1.06l-12.5 12.5a.75.75 0 0 1-1.06-1.06l12.5-12.5a.75.75 0 0 1 1.06 0Z" />
    </G>
  </Svg>
);
