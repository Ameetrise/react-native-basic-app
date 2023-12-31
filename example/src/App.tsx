/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  Container,
  ShowMenuContext,
  AlertContext,
} from 'react-native-basic-app';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function App() {
  const [shouldShowMenu, setShouldShowMenu] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState(
    'Im a default alert message'
  );
  const [shouldShowAlert, setShouldShowAlert] = React.useState(false);

  return (
    <ShowMenuContext.Provider
      value={{
        shouldShowMenu,
        setShouldShowMenu,
      }}
    >
      <AlertContext.Provider
        value={{
          setAlertMessage,
          setShouldShowAlert,
          shouldShowAlert,
          alertMessage,
        }}
      >
        <View style={styles.container}>
          <Container
            drawerContent={
              <View style={{ flexDirection: 'column' }}>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
              </View>
            }
            rightIcon={{
              icon: <FontAwesome name="home" size={24} color={'black'} />,
              onPress() {
                console.log('Hello');
              },
            }}
            headerTitle={'Home Nepali'}
            children={
              <View>
                <Text>
                  Im children and im so happy lets see how long does this check
                  go
                </Text>
                <FontAwesome name={'music'} size={28} color={'red'} />
              </View>
            }
          />
        </View>
      </AlertContext.Provider>
    </ShowMenuContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
