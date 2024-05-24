import React, { memo, useMemo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet } from "react-native";

const emptyFunction = () => {};

type TouchFillerProps = React.ComponentProps<typeof Pressable> & {
  onPress?:
    | null
    | undefined
    | React.ComponentProps<typeof Pressable>["onPress"];
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
  rippleColor?: string;
};

const TouchFiller = memo(
  ({
    style,
    onPress = emptyFunction,
    borderRadius,
    rippleColor = "silver",
    android_ripple,
    ...props
  }: TouchFillerProps) => {
    const _style: StyleProp<ViewStyle> = useMemo(() => {
      return StyleSheet.flatten([styles.pressable, { borderRadius }, style]);
    }, [style, borderRadius]);

    const rippleColorObject: React.ComponentProps<
      typeof Pressable
    >["android_ripple"] = useMemo(() => {
      return { color: rippleColor, ...android_ripple };
    }, [rippleColor, android_ripple]);

    if (onPress === null) {
      return null;
    }

    return (
      <Pressable
        {...props}
        onPress={onPress}
        style={_style}
        android_ripple={rippleColorObject}
      />
    );
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
