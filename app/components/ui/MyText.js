import { StyleSheet, Text } from "react-native";

export default function MyText({ children, style, ...props }) {
  return (
    <Text style={[{ fontFamily: "openSans" }, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
