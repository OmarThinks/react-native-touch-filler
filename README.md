# React Native Touch Filler

A React-Native component that makes a view touchable

<b>

```bash
npm i react-native-touch-filler
```

</b>

# Links:

- npm: [Package](https://www.npmjs.com/package/react-native-touch-filler) [<img src="https://github.com/OmarThinks/react-native-touch-filler/blob/master/media/images/Npm-logo.svg?raw=true" height="15"/>](https://www.npmjs.com/package/react-native-touch-filler)
- GitHub: [Repo](https://github.com/OmarThinks/react-native-touch-filler) [<img src="https://github.com/OmarThinks/react-native-touch-filler/blob/master/media/images/GitHub_Invertocat_Logo.svg?raw=true" height="15"/>](https://github.com/OmarThinks/react-native-touch-filler)
- YouTube: [Video](https://www.youtube.com/watch?v=hmNTLzLNAwk) [<img src="https://github.com/OmarThinks/react-native-touch-filler/blob/master/media/images/YouTube_icon.svg?raw=true" height="15"/>](https://www.youtube.com/watch?v=hmNTLzLNAwk)

# Basic Example:

<b>

```tsx
import React from "react";
import { View, Text } from "react-native";
import TouchFiller from "react-native-touch-filler";

const App = () => {
  return (
    <View
      style={{
        alignSelf: "stretch",
        height: 100,
        backgroundColor: "lime",
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchFiller />

      <Text>Content</Text>
    </View>
  );
};

export default App;
```

</b>

# Full Examples:

Full Example code: https://github.com/OmarThinks/react-native-touch-filler/blob/master/src/ExamplesTouchFiller.tsx

<b>

```tsx
import { ExamplesTouchFiller } from "react-native-touch-filler";

const App = () => {
  return (
    <ExamplesTouchFiller
    // Full Example code: https://github.com/OmarThinks/react-native-touch-filler/blob/master/src/ExamplesTouchFiller.tsx
    />
  );
};

export default App;
```

</b>

### 3) Full Exports

<b>

```tsx
import TouchFiller, { ExamplesTouchFiller } from "react-native-touch-filler";
import type { TouchFillerProps } from "react-native-touch-filler";
```

</b>

# 4) Examples GIFs:

![gif1](https://github.com/OmarThinks/react-native-touch-filler/blob/master/media/videos/1.gif?raw=true)

![gif2](https://github.com/OmarThinks/react-native-touch-filler/blob/master/media/videos/2.gif?raw=true)

![gif3](https://github.com/OmarThinks/react-native-touch-filler/blob/master/media/videos/3.gif?raw=true)

![gif4](https://github.com/OmarThinks/react-native-touch-filler/blob/master/media/videos/4.gif?raw=true)

![gif5](https://github.com/OmarThinks/react-native-touch-filler/blob/master/media/videos/5.gif?raw=true)

![gif6](https://github.com/OmarThinks/react-native-touch-filler/blob/master/media/videos/6.gif?raw=true)

# Props:

<table>

<tr>
  <th>Prop</th>
  <th>Is Optional</th>
  <th>Type</th>
  <th>Functionality</th>
  <th>Default Value</th>
</tr>

<tr>
  <td>
  
  `...props`
  
  </td>
  <td>Optional</td>
  <td>

Props of [Pressable](https://reactnative.dev/docs/pressable#props)

  </td>
  <td></td>
</tr>

<tr>
  <td>
  
  <code>onPress</code>
  
  </td>
  <td>Optional</td>
  <td>
  
  | `null`\
  | `undefined`\
  | `((event: GestureResponderEvent) => void)`

  </td>
  <td>
  
  - Default value: `()=>{}`
  - `null`: do not activate the press or the ripple
  - a function: The function the be executed on press, example: `()=>{console.log("Hi")}` 
  
  </td>
  <th>

`()=>{}`

  </th>
</tr>

<tr>
  <td> <code>zIndex</code></td>
  <td>Optional</td>
  <td>number</td>
  <td>
  
    
    `zIndex` of the TouchFiller

  </td>
  <th><code>1</code></th>
</tr>

<tr>
  <td> <code>style</code></td>
  <td>Optional</td>
  <td>
  
  `StyleProp<ViewStyle>`
  
  </td>
  <td>The style</td>
  <th><code>undefined</code></th>
</tr>

<tr>
  <td> <code>color</code></td>
  <td>Optional</td>
  <td>string</td>
  <td>Color of the ripple (Android)</td>
  <th><code>"grey"</code></th>
</tr>

<tr>
  <td> <code>borderless</code></td>
  <td>Optional</td>
  <td>boolean</td>
  <td>
  
  - `true` (default): The TouchFiller shouldn't cross the borders of it's parent View
  - `false`: The TouchFiller can cross the borders of it's parent View

  </td>
  <th><code>true</code></th>
</tr>

<tr>
  <td> <code>withoutRipple</code></td>
  <td>Optional</td>
  <td>boolean</td>
  <td>
  
  - `false` (default): displas ripple for android
  - `true`: turns off the ripple

  </td>
  <th><code>false</code></th>
</tr>

</table>

# Todos:

- Document basic example with content and gif
- conver header of Full Examples to include `<FullExamples />`
- after or before to each example, add code, make it can be hidden
- links, no-one cares, just convert them to a single line, and remove that big header
