import { debounce } from "lodash";
import { memo, useCallback } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

const HeaderInput = ({ setInputValue }) => {
  const mode = useSelector((state) => state.mode.mode);

  const onSearchQueryChangeHandler = useCallback(
    debounce((txt) => {
      setInputValue(txt);
    }, 400),
    []
  );

  return (
    <View>
      <TextInput
        placeholder="Search"
        placeholderTextColor={"grey"}
        autoFocus
        onChangeText={(text) => onSearchQueryChangeHandler(text)}
        autoCapitalize="none"
        style={[styles.input, { color: mode ? "#fff" : "#000" }]}
      />
    </View>
  );
};

export default memo(HeaderInput);

const styles = StyleSheet.create({
  input: {
    fontFamily: "openSans",
  },
});
