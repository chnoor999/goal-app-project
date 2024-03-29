import { StyleSheet,  View } from "react-native";

import HeaderText from "./HeaderText";
import HeaderInput from "./HeaderInput";

export default function HeaderTitle({
  title,
  inputShow,
  inputValue,
  setInputValue,
}) {
  return (
    <View>
      {inputShow ? (
        <HeaderInput inputShow={inputValue} setInputValue={setInputValue} />
      ) : (
        <HeaderText>{title}</HeaderText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
