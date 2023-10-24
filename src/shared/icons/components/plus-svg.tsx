import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgPlus = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3v18m9-9H3"
    />
  </Svg>
);
