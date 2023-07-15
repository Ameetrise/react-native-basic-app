/* eslint-disable react-native/no-inline-styles */
import { useContext } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { ContainerStyling } from './styles';
import { Platform } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import AlertMessage from './AlertModel';
import { AlertContext, ShowMenuContext } from './modelProvider';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawer from './Drawer';

type RightIconTypes = { icon: JSX.Element; onPress: () => void };

function Container({
  headerTitle,
  backBthColor,
  backIcon,
  menuIcon,
  rightIcon,
  headerTextSize = 18,
  children,
  backBtnSize,
  backButtonPress,
  menuBtnColor,
  menuBtnSize,
  drawerContent,
  titleColor,
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
  backBthColor?: string;
  backButtonPress?: () => void;
  showBackButton?: boolean;
  backBtnSize?: number;
  drawerContent?: JSX.Element;
  headerTextSize?: number;
  titleColor?: string;
  menuBtnColor?: string;
  menuBtnSize?: number;
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
          children={drawerContent}
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
        <View style={[styles.headerContainer, {}]}>
          {showBackButton ? (
            <>
              {backIcon || (
                <Ionicons
                  color={backBthColor || 'black'}
                  name="arrow-back"
                  size={backBtnSize || 28}
                  style={[styles.menu, { left: 20 }]}
                  onPress={backButtonPress}
                />
              )}
            </>
          ) : (
            <>
              {menuIcon || (
                <Ionicons
                  name="menu"
                  size={menuBtnSize || 28}
                  style={styles.menu}
                  color={menuBtnColor || 'black'}
                  onPress={(): void => setShouldShowMenu(true)}
                />
              )}
            </>
          )}
          <Text
            style={[
              styles.title,
              {
                color: titleColor || 'black',
                textAlign: headerTitle.length > 15 ? 'left' : 'center',
                fontSize:
                  headerTitle.length > 15 ? headerTextSize - 2 : headerTextSize,
                // left: 48,
                fontWeight: '700',
              },
            ]}
          >
            {headerTitle}
          </Text>
          {rightIcon && (
            <TouchableOpacity
              onPress={rightIcon.onPress}
              style={{ position: 'absolute', right: 24 }}
            >
              {rightIcon.icon}
            </TouchableOpacity>
          )}
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

export { Container, ShowMenuContext, AlertContext, Drawer };
