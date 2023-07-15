import { StyleSheet } from 'react-native';

export function ContainerStyling() {
  return StyleSheet.create({
    container: {
      marginTop: 18,
      width: '100%',
      backgroundColor: 'brown',
    },
    title: {
      left: 64,
      width: '70%',
      position: 'absolute',
      maxHeight: 180,
      color: 'black',
    },
    bodyContainer: {
      alignSelf: 'stretch',
      width: '100%',
      height: '95%',
      paddingLeft: '14%',
      paddingRight: '7%',
      backgroundColor: 'white',
    },
    headerContainer: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '7%',
    },
    menu: {
      position: 'absolute',
      alignSelf: 'center',
      left: 25,
    },
  });
}
