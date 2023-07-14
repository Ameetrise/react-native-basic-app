import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  Container,
  ShowMenuContext,
  AlertContext,
} from 'react-native-basic-app';

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
            // showBackButton
            narrowMode
            headerTitle={'Im header'}
            children={
              <Text>
                Im children and im so happy lets see how long does this check go
              </Text>
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
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
