import React from "react";
import { ScrollView, Text, View } from "react-native";
import TouchFiller from "./TouchFiller";

const onPress = () => console.log("Pressed");

const ExamplesTouchFiller = () => {
  return (
    <ScrollView
      style={{ alignSelf: "stretch", backgroundColor: "white" }}
      contentContainerStyle={{ alignSelf: "stretch", alignItems: "stretch" }}
    >
      <View
        style={{
          alignSelf: "stretch",
          marginHorizontal: 10,
          marginTop: 40,
          gap: 20,
        }}
      >
        {/*1) Simple case ✅*/}
        <ContentWithTitle title="1) Simple case ✅">
          <View
            style={{
              alignSelf: "stretch",
              height: 200,
              backgroundColor: "cyan",
            }}
          >
            <TouchFiller onPress={onPress} />
          </View>
        </ContentWithTitle>

        {/*2) Parent with BorderRadius ✅*/}
        <ContentWithTitle title="2) Parent with BorderRadius ✅">
          <View
            style={{
              alignSelf: "stretch",
              height: 200,
              backgroundColor: "lime",
              borderRadius: 1000,
            }}
          >
            <TouchFiller onPress={onPress} />
          </View>
        </ContentWithTitle>

        {/*3) With zIndex ✅*/}
        <ContentWithTitle title="3) With zIndex ✅">
          <View
            style={{
              alignSelf: "stretch",
              height: 200,
              backgroundColor: "magenta",
            }}
          >
            <TouchFiller onPress={onPress} />
            <View
              style={{
                position: "absolute",
                right: 10,
                top: 10,
                width: 100,
                height: 100,
                zIndex: 1,
                backgroundColor: "pink",
                borderRadius: 100,
              }}
            >
              <TouchFiller onPress={onPress} />
            </View>

            <View
              style={{
                position: "absolute",
                right: 60,
                top: 60,
                width: 100,
                height: 100,
                zIndex: 2,
                backgroundColor: "blue",
                borderRadius: 100,
              }}
            >
              <TouchFiller onPress={onPress} />
            </View>
            <View
              style={{
                position: "absolute",
                right: 110,
                top: 10,
                width: 100,
                height: 100,
                zIndex: 3,
                backgroundColor: "yellow",
                borderRadius: 100,
              }}
            >
              <TouchFiller onPress={onPress} />
            </View>
          </View>
        </ContentWithTitle>

        {/*4) Change Ripple Color ✅*/}
        <ContentWithTitle title="4) Change Ripple Color ✅">
          <View
            style={{
              alignSelf: "stretch",
              height: 200,
              backgroundColor: "lime",
            }}
          >
            <TouchFiller color="red" onPress={onPress} />
          </View>
        </ContentWithTitle>

        {/*5) Without Ripple ✅*/}
        <ContentWithTitle title="5) Without Ripple ✅">
          <View
            style={{
              alignSelf: "stretch",
              height: 200,
              backgroundColor: "pink",
            }}
          >
            <TouchFiller withoutRipple onPress={onPress} />
          </View>
        </ContentWithTitle>

        {/*6) The parent should not have padding ❌*/}
        <ContentWithTitle title="6) The parent should not have padding ❌">
          <Text style={{ fontSize: 15, fontWeight: "semibold" }}>
            Bescause, how will the TouchFiller expand inside a component with
            padding?
          </Text>
          <View
            style={{
              alignSelf: "stretch",
              height: 200,
              backgroundColor: "lime",
              padding: 30,
            }}
          >
            <TouchFiller onPress={onPress} />
          </View>
        </ContentWithTitle>

        {/*7) Not Pressable*/}
        <ContentWithTitle title="7) Not Pressable ✅">
          <View
            style={{
              alignSelf: "stretch",
              height: 200,
              backgroundColor: "lime",
            }}
          >
            <TouchFiller onPress={null} />
          </View>
        </ContentWithTitle>
      </View>
    </ScrollView>
  );
};

const ContentWithTitle = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <View style={{ alignSelf: "stretch", gap: 10 }}>
      <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
        {title}
      </Text>
      {children}
      <View
        style={{
          alignSelf: "stretch",
          height: 1,
          backgroundColor: "black",
        }}
      />
    </View>
  );
};

export default ExamplesTouchFiller;
