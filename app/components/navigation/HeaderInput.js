import { StyleSheet,  TextInput, View } from "react-native";

import { useSelector } from "react-redux";

export default function HeaderInput({ inputValue, setInputValue }) {
  const mode = useSelector(state=>state.mode.mode)
  
  return (
    <View>
      <TextInput
        placeholder="Search"
        placeholderTextColor={"grey"}
        autoFocus
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        autoCapitalize="none"
        style={[styles.input,{color:mode?"#fff":"#000"}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    fontFamily:"openSans"
  }
});
