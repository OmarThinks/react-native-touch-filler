import React, { forwardRef, memo, useMemo } from "react";
import type { StyleProp, View, ViewStyle } from "react-native";
import { Pressable, StyleSheet } from "react-native";

const emptyFunction = () => {};

type TouchFillerProps = React.ComponentProps<typeof Pressable> & {
  onPress?:
    | null
    | undefined
    | React.ComponentProps<typeof Pressable>["onPress"];
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
    color = "grey",
    android_ripple,
    borderless = true,
    withoutRipple,
    ...props
  }: TouchFillerProps) =>
    //ref?: TouchFillerRef
    {
      const _style: StyleProp<ViewStyle> = useMemo(() => {
        return StyleSheet.flatten([styles.pressable, style]);
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

      if (onPress === null) {
        return <Pressable style={styles.hiddenPressable} />;
      }

      const _android_ripple = withoutRipple ? undefined : rippleColorObject;

      return (
        <Pressable
          {...props}
          onPress={onPress}
          style={_style}
          android_ripple={_android_ripple}
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
