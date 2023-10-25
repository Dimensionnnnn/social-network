import React from 'react';

import {SvgBookmark} from 'src/shared/icons/components/bookmark-svg';
import {SvgHomeIcon} from 'src/shared/icons/components/home-svg';
import {SvgPhoto} from 'src/shared/icons/components/photo-svg';

interface TabBarIconProps {
  name: string;
  color: string;
}

export enum TabBarIconsNames {
  FAVORITES = 'Favorites',
  MAIN = 'Main',
  MY_POSTS = 'My posts',
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({name, color}) => {
  switch (name) {
    case TabBarIconsNames.FAVORITES:
      return <SvgBookmark color={color} />;
    case TabBarIconsNames.MAIN:
      return <SvgHomeIcon color={color} />;
    case TabBarIconsNames.MY_POSTS:
      return <SvgPhoto color={color} />;
    default:
      return <SvgHomeIcon color={color} />;
  }
};
