/* eslint-disable react-native/no-inline-styles */
import { useContext } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { ContainerStyling } from './styles';
import { Platform } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import Drawer from './Drawer';
import AlertMessage from './AlertModel';
import { AlertContext, ShowMenuContext } from './modelProvider';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type RightIconTypes = { icon: JSX.Element; onPress: () => void };

function Container({
  headerTitle,
  backIcon,
  menuIcon,
  rightIcon,
  children,
  backButtonPress,
  showBackButton,
  headerShown = true,
  narrowMode,
  scrollable,
  wideSymmetrical,
  fullScreen,
  wholeScreen, // wholeScreen = true means that the
}: // children is all that is returned from this component
{
  headerTitle: string;
  rightIcon?: RightIconTypes;
  children: JSX.Element;
  backButtonPress?: () => void;
  showBackButton?: boolean;
  backIcon?: JSX.Element;
  menuIcon?: JSX.Element;
  headerShown?: boolean;
  narrowMode?: boolean;
  scrollable?: boolean;
  wideSymmetrical?: boolean;
  fullScreen?: boolean;
  wholeScreen?: boolean;
}): JSX.Element {
  const { shouldShowMenu, setShouldShowMenu } = useContext(ShowMenuContext);
  const { alertMessage, shouldShowAlert, setShouldShowAlert } =
    useContext(AlertContext);
  const styles = ContainerStyling();
  backButtonPress;
  return wholeScreen ? (
    children
  ) : (
    <SafeAreaView>
      {shouldShowMenu && (
        <Drawer
          shouldShow={shouldShowMenu}
          onBackdropPress={(): void => setShouldShowMenu(false)}
        />
      )}
      <AlertMessage
        shouldShow={shouldShowAlert}
        alertMessage={alertMessage}
        onPressOk={(): void => setShouldShowAlert(false)}
      />
      {headerShown && (
        <View style={[styles.headerContainer, { backgroundColor: 'purple' }]}>
          {showBackButton ? (
            <View>
              {backIcon ? (
                backIcon
              ) : (
                <Ionicons
                  onPress={() => {
                    console.log('OnBackPress');
                  }}
                  style={{ padding: '4%' }}
                  name={'arrow-back'}
                  size={24}
                  color={'blue'}
                />
              )}
            </View>
          ) : (
            <TouchableOpacity
              onPress={(): void => {
                setShouldShowMenu(true);
              }}
              style={{ padding: 8 }}
            >
              {menuIcon ? (
                menuIcon
              ) : (
                <Ionicons name="menu" size={32} color={'red'} />
              )}
            </TouchableOpacity>
          )}
          <Text
            style={[
              styles.title,
              {
                textAlign: headerTitle.length > 15 ? 'center' : 'left',
                fontSize: headerTitle.length > 15 ? 12 : 16,
                left: 54,
              },
            ]}
          >
            {headerTitle}
          </Text>
          {rightIcon && rightIcon}
        </View>
      )}
      {scrollable ? (
        <ScrollView
          overScrollMode="never"
          style={[
            styles.bodyContainer,
            { overflow: 'scroll', height: '100%' },
            narrowMode ? { paddingRight: '14%' } : {},
          ]}
        >
          {children}
        </ScrollView>
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
          style={[
            styles.bodyContainer,
            narrowMode ? { paddingRight: '14%' } : {},
            wideSymmetrical ? { paddingLeft: '7%', paddingRight: '7%' } : {},
            fullScreen
              ? {
                  paddingLeft: '0%',
                  paddingRight: '0%',
                }
              : { height: '93%' },
          ]}
        >
          {children}
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
}

export { Container, ShowMenuContext, AlertContext };
