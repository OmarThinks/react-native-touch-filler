import { Pressable, StyleSheet } from "react-native";
import { memo, useMemo } from "react";
import type { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
import React from "react";
const emptyFunction = () => {
  console.log("Pressed");
};

type TouchFillerProps = React.ComponentProps<typeof Pressable> & {
  onPress?:
    | null
    | undefined
    | React.ComponentProps<typeof Pressable>["onPress"];
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
};

const TouchFiller = memo(
  ({
    style,
    onPress = emptyFunction,
    borderRadius,
    ...props
  }: TouchFillerProps) => {
    if (onPress === null) {
      return null;
    }

    const _style: StyleProp<ViewStyle> = useMemo(() => {
      return StyleSheet.flatten([styles.pressable, style]);
    }, [style]);

    return <Pressable {...props} onPress={onPress} style={_style} />;
  }
);

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
});

export type { TouchFillerProps };
export default TouchFiller;
