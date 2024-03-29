import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
export const SvgUserIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    strokeWidth={1.5}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="currentColor"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
      <Path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </G>
  </Svg>
);
