import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgShare = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" viewBox="0 0 18 18" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.125 2.75a2.5 2.5 0 1 1 .688 1.722L5.795 8.37a2.503 2.503 0 0 1 0 1.258l7.018 3.9a2.5 2.5 0 1 1-.607 1.092l-7.019-3.9a2.5 2.5 0 1 1 0-3.444l7.018-3.898a2.502 2.502 0 0 1-.08-.629Z"
      clipRule="evenodd"
    />
  </Svg>
);
