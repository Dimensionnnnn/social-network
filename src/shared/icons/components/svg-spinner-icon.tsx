import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
export const SvgSpinnerIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={9}
      stroke={props.stroke || '#fff'}
      strokeWidth={2}
      opacity={0.5}
    />
    <Path stroke="currentColor" strokeWidth={2} d="M12 21a9 9 0 0 1-9-9" />
  </Svg>
);
