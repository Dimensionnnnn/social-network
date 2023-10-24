import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgHeart = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <Path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.1 6.727C18.1 4.558 16.21 2.8 13.88 2.8c-1.742 0-3.237.983-3.881 2.386C9.356 3.783 7.86 2.8 6.119 2.8c-2.33 0-4.22 1.758-4.22 3.927C1.9 13.03 10 17.2 10 17.2s8.1-4.171 8.1-10.473Z"
    />
  </Svg>
);
