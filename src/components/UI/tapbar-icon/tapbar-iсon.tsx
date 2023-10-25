import React from 'react';

import {SvgBookmark} from 'src/shared/icons/components/bookmark-svg';
import {SvgHomeIcon} from 'src/shared/icons/components/home-svg';
import {SvgPhoto} from 'src/shared/icons/components/photo-svg';

interface TabBarIconProps {
  name: string;
  color: string;
}

export enum TabBarIconsNames {
  Favorites = 'Favorites',
  Main = 'Main',
  'My posts' = 'My posts',
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({name, color}) => {
  switch (name) {
    default:
    case TabBarIconsNames.Favorites:
      return <SvgBookmark color={color} />;
    case TabBarIconsNames.Main:
      return <SvgHomeIcon color={color} />;
    case TabBarIconsNames['My posts']:
      return <SvgPhoto color={color} />;
  }
};
