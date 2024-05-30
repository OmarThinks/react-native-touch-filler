import React, { forwardRef, memo, useMemo } from "react";
import type { StyleProp, View, ViewStyle } from "react-native";
import { Pressable, StyleSheet } from "react-native";

const emptyFunction = () => {};

type TouchFillerProps = React.ComponentProps<typeof Pressable> & {
  onPress?:
    | null
    | undefined
    | React.ComponentProps<typeof Pressable>["onPress"];
  zIndex?: number;
  style?: StyleProp<ViewStyle>;
  color?: string;
  borderless?: boolean;
  withoutRipple?: boolean;
};

//type TouchFillerRef = React.LegacyRef<View>;

const TouchFiller = memo(
  //forwardRef(
  ({
    style,
    onPress = emptyFunction,
    zIndex = 1,
    color = "grey",
    android_ripple,
    borderless = true,
    withoutRipple = false,
    ...props
  }: TouchFillerProps) =>
    //ref?: TouchFillerRef
    {
      const _style: StyleProp<ViewStyle> = useMemo(() => {
        return StyleSheet.flatten([{ zIndex }, styles.pressable, style]);
      }, [style]);

      const rippleColorObject: React.ComponentProps<
        typeof Pressable
      >["android_ripple"] = useMemo(() => {
        return {
          color: withoutRipple ? "transparent" : color,
          borderless,
          ...android_ripple,
        };
      }, [color, android_ripple]);

      const _android_ripple = withoutRipple ? undefined : rippleColorObject;

      return (
        <Pressable
          {...props}
          onPress={onPress === null ? undefined : onPress}
          style={_style}
          android_ripple={onPress === null ? undefined : _android_ripple}
          //ref={ref}
        />
      );
    }
  //)
);

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  hiddenPressable: {
    position: "absolute",
    width: 0,
    height: 0,
    display: "none",
  },
});

export type { TouchFillerProps };
export default TouchFiller;
