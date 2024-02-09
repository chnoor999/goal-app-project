import { SafeAreaView, StyleSheet } from "react-native";
// expo constants
import Constants from "expo-constants";

export default function Screen({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
