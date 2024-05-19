import { View } from "react-native";
import { memo } from "react";

import HeaderText from "./HeaderText";
import HeaderInput from "./HeaderInput";

const HeaderTitle = ({ title, inputShow, setInputValue }) => {
  return (
    <View>
      {inputShow ? (
        <HeaderInput setInputValue={setInputValue} />
      ) : (
        <HeaderText>{title}</HeaderText>
      )}
    </View>
  );
};

export default memo(HeaderTitle);
