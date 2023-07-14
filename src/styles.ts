import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');
export function ContainerStyling() {
  return StyleSheet.create({
    container: {
      marginTop: 18,
      width: '100%',
    },
    title: {
      alignSelf: 'center',
      width: '70%',
      left: width / 2 - width / 4,
      position: 'absolute',
      maxHeight: 180,
      color: 'white',
      // fontWeight: '700',
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
      backgroundColor: 'orange',
      position: 'relative',
      flexDirection: 'row',
      width: '100%',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      height: '7%',
    },
    menu: {
      color: 'orange',
      position: 'absolute',
      alignSelf: 'center',
      left: 25,
    },
  });
}
