# React Native Touch Filler

A React-Native component that makes a view touchable

# How to use:

<b>

```bash
npm i react-native-touch-filler
```

</b>

# Examples:

## 1) Basic Example:

<b>

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

</b>

## 2) Full Examples:

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

<img 
    style="width: 330px; height: 230px; background-position:center; object-fit: cover; object-position: center 7%;" 
    src="./media/videos/1.gif">

<img 
    style="width: 330px; height: 230px; background-position:center; object-fit: cover; object-position: center 20%;" 
    src="./media/videos/2.gif">

<img 
    style="width: 330px; height: 230px; background-position:center; object-fit: cover; object-position: center 10%;" 
    src="./media/videos/3.gif">

<img 
    style="width: 330px; height: 230px; background-position:center; object-fit: cover; object-position: center 16%;" 
    src="./media/videos/4.gif">

<img 
    style="width: 330px; height: 230px; background-position:center; object-fit: cover; object-position: center 17%;" 
    src="./media/videos/5.gif">

<img 
    style="width: 330px; height: 290px; background-position:center; object-fit: cover; object-position: center 78%;" 
    src="./media/videos/6.gif">

<!--

![gif1](./media/videos/1.gif)

![gif1](./media/videos/2.gif)

![gif1](./media/videos/3.gif)

![gif1](./media/videos/4.gif)

![gif1](./media/videos/5.gif)

![gif1](./media/videos/6.gif)

-->

# Todos:

- Document props
- Examples should contain conent
- Add how to use
- Add table of contents
- Add Why I haven't added a `ref`
- Contributing
