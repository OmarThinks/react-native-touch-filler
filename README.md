# React Native Touch Filler

A React-Native component that makes a view touchable

<b>

```bash
npm i react-native-touch-filler
```

</b>

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

![gif1](./media/videos/1.gif)

![gif1](./media/videos/2.gif)

![gif1](./media/videos/3.gif)

![gif1](./media/videos/4.gif)

![gif1](./media/videos/5.gif)

![gif1](./media/videos/6.gif)

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
  
  `onPress`
  
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
  <td>style</td>
  <td>Optional</td>
  <td>
  
  `StyleProp<ViewStyle>`
  
  </td>
  <td>The style</td>
  <th><code>undefined</code></th>
</tr>

<tr>
  <td>color</td>
  <td>Optional</td>
  <td>string</td>
  <td>Color of the ripple (Android)</td>
  <th><code>"grey"</code></th>
</tr>

<tr>
  <td>borderless</td>
  <td>Optional</td>
  <td>boolean</td>
  <td>
  
  - `true` (default): The TouchFiller shouldn't cross the borders of it's parent View
  - `false`: The TouchFiller can cross the borders of it's parent View

  </td>
  <th><code>true</code></th>
</tr>

<tr>
  <td>withoutRipple</td>
  <td>Optional</td>
  <td>boolean</td>
  <td>
  
  - `false` (default): displas ripple for android
  - `true`: turns off the ripple

  </td>
  <th><code>false</code></th>
</tr>

</table>
