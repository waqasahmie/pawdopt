// components/CustomHeader.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { ms, vs } from "react-native-size-matters"; // assuming you're using this
import { HugeiconsIcon } from "@hugeicons/react-native";
import {
  Notification03Icon,
  Search01Icon,
  Stethoscope02Icon,
} from "@hugeicons/core-free-icons";
import { router } from "expo-router";

const CustomHeader = () => {


  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSection}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Hello, </Text>
          <Text style={styles.username}>Dr Asad!</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <HugeiconsIcon
          icon={Notification03Icon}
          size={ms(22)}
          onPress={() => {
            router.push("/(others)/notifications");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 50 : 40,
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    gap: 10,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  greeting: {
    flexDirection: "column",
  },
  greetingText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#ACACAC",
  },
  username: {
    fontSize: 16,
    fontWeight: "400",
  },
  paw: {
    width: 20,
    height: 20,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});

export default CustomHeader;