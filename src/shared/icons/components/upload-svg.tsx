import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgUpload = (props: SvgProps) => (
  <Svg width={36} height={36} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
      clipRule="evenodd"
    />
  </Svg>
);
