# react-native-basic-app

Basic App with container and reusable context providers

## Other Dependency

[Vector Icons](https://github.com/oblador/react-native-vector-icons)
```sh
npm install react-native-vector-icons
```

## Installation

```sh
npm install react-native-basic-app
```

## Usage

```js
import {
  Container,
  ShowMenuContext,
  AlertContext,
} from 'react-native-basic-screen';
// ...

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
          alertMessage: 'Hello im alert',
        }}
      >
        <View style={styles.container}>
          <Container
            showBackButton
            narrowMode
            headerTitle={'Home'}
            children={
              <Text>
                Im a child and im so happy to be rendered by a container.
              </Text>
            }
          />
        </View>
      </AlertContext.Provider>
    </ShowMenuContext.Provider>
```
Use ShowMenuContext.Provider to use Drawer and AlertContext.Provider to use custom model with context in your root component.
Customization properties:
  headerTitle: string;                                      //screen title
  rightIcon?: { icon: JSX.Element; onPress: () => void };   //provide right button component on onPress function if needed
  children: JSX.Element;                                    //container to be used inside component
  backBthColor?: string;                                    //backbutton color
  backButtonPress?: () => void;                             //back button press function
  showBackButton?: boolean;                                 //show back button if false shows menu
  backBtnSize?: number;                                     //back button size
  drawerContent?: JSX.Element;                              //content for drawer
  headerTextSize?: number;                                  //header text size
  titleColor?: string;                                      //header title color
  menuBtnColor?: string;                                    //menu button color
  menuBtnSize?: number;                                     //menu button size
  backIcon?: JSX.Element;                                   //back icon custom component
  menuIcon?: JSX.Element;                                   //menu icon component
  headerShown?: boolean;                                    //show or hide header
  narrowMode?: boolean;                                     //container with horizontal padding
  scrollable?: boolean;                                     //scrollable container
  wideSymmetrical?: boolean;                                //full width container
  fullScreen?: boolean;                                     //full screen container
  wholeScreen?: boolean;                                    //whole screen container (no header)
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
