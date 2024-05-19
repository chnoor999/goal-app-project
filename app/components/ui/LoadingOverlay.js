import { StyleSheet, View, ActivityIndicator } from "react-native";
import { memo } from "react";
import { useSelector } from "react-redux";

import Colors from "../../config/color/Colors";

const LoadingOverlay = () => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: mode ? Colors.black200 : "#fff" },
      ]}
    >
      <ActivityIndicator size={"large"} color={mode ? "#fff" : "#000"} />
    </View>
  );
};

export default memo(LoadingOverlay);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
