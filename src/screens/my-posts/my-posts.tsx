import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'src/components/UI/button/button-icon-bg/button-icon-bg';
import {SvgPlus} from 'src/shared/icons/components/plus-svg';
import {SwipeablePostsList} from 'src/components/swipeable-posts-list/swipeable-posts-list';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList, RouteNames} from 'src/routes/routes';
import {Header} from 'src/components/header/header';
import {useMyPostsData} from 'src/hooks/posts/useMyPostsData';

export const MyPosts = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {isLoading, isError, myPosts, fetchMore} = useMyPostsData();

  const handleOpenCreatePostScreen = () => {
    navigation.navigate(RouteNames.CREATE_POST);
  };

  return (
    <>
      <Header headerInfo="My Posts" />
      <View style={styles.container}>
        <SwipeablePostsList
          isLoading={isLoading}
          isError={isError}
          data={myPosts}
          fetchMore={fetchMore}
        />
      </View>
      <View style={styles.containerNewPost}>
        <Button
          Icon={SvgPlus}
          buttonSize="large"
          onPress={handleOpenCreatePostScreen}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerNewPost: {
    width: '100%',
    position: 'absolute',
    bottom: 32,
    left: '80%',
  },
});
