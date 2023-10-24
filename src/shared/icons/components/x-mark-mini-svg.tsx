import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
export const SvgXMini = (props: SvgProps) => (
  <Svg width={13} height={13} fill="none" viewBox="0 0 13 13" {...props}>
    <G
      fill="currentColor"
      fillRule="evenodd"
      clipPath="url(#a)"
      clipRule="evenodd">
      <Path d="M2.093 2.093c.19-.19.499-.19.69 0l8.124 8.125a.488.488 0 0 1-.69.69L2.094 2.781a.488.488 0 0 1 0-.69Z" />
      <Path d="M10.907 2.093c.19.19.19.499 0 .69l-8.125 8.124a.488.488 0 0 1-.69-.69l8.126-8.124c.19-.19.499-.19.69 0Z" />
    </G>
  </Svg>
);
