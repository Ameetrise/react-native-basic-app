# react-native-basic-app

Basic App with container and reusable context providers

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
