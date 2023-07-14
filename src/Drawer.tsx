/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import drawerStyles from './drawerStyles';
import ReactNativeModal from 'react-native-modal';
// import { ShowMenuContext } from './modelProvider';
/**
 * The Menu modal that appears on the top left portion of the screen. User can navigate
 * throughout the app through this component.
 */
const { height, width } = Dimensions.get('screen');
function Drawer({
  shouldShow,
  onBackdropPress,
}: {
  shouldShow: boolean;
  onBackdropPress: () => void;
}): JSX.Element {
  // const { setShouldShowMenu } = useContext(ShowMenuContext);
  const [internalShouldShowMenu, setInternalShouldShowMenu] =
    useState(shouldShow);
  // const closeAndNavigate = () => {
  //   setInternalShouldShowMenu(false);
  //   setShouldShowMenu(false);
  //   // navigateFunc();
  // };
  return (
    <ReactNativeModal
      propagateSwipe
      scrollOffset={1}
      deviceHeight={height}
      deviceWidth={width}
      isVisible={internalShouldShowMenu}
      onBackdropPress={(): void => setInternalShouldShowMenu(false)}
      onModalHide={onBackdropPress}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
    >
      <View style={[drawerStyles.container, { backgroundColor: 'white' }]}>
        <Text>Hello Im drawer</Text>
      </View>
    </ReactNativeModal>
  );
}

export default Drawer;
