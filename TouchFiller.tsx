import { Pressable } from "react-native";
import { memo } from "react";
import type { GestureResponderEvent } from "react-native";
import React from "react";

React.ComponentProps;

type TouchFillerProps = React.ComponentProps<typeof Pressable>;

const TouchFiller = memo(({ style, onPress, ...props }: TouchFillerProps) => {
  return <Pressable onPress={} />;
});
