# React Native Touch Filler

A React-Native component that makes a view touchable

# How to use:

```bash
npm i react-native-touch-filler
```

# Examples:

## 1) Basic Example:

```tsx
import React from "react";
import { View } from "react-native";
import TouchFiller from "react-native-touch-filler";

const App = () => {
  return (
    <View
      style={{
        alignSelf: "stretch",
        height: 100,
        backgroundColor: "lime",
        margin: 20,
      }}
    >
      <TouchFiller />
    </View>
  );
};

export default App;
```

## 2) Full Examples:

Full Example code: https://github.com/OmarThinks/react-native-touch-filler/blob/master/src/ExamplesTouchFiller.tsx

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

### 3) Full Exports

```tsx
import TouchFiller, { ExamplesTouchFiller } from "react-native-touch-filler";
import type { TouchFillerProps } from "react-native-touch-filler";
```

# Examples GIFs:

![gif1](./media/videos/1.gif)

![gif1](./media/videos/2.gif)

![gif1](./media/videos/3.gif)

![gif1](./media/videos/4.gif)

![gif1](./media/videos/5.gif)

![gif1](./media/videos/6.gif)

# Todos:

- Adding keywords
- Remove ref, It's usafe
- Document props
- Examples should contain conent
- make code bold and install text bold
- Add how to use
- Add table of contents
- Add Why I haven't added a `ref`
- Contributing
