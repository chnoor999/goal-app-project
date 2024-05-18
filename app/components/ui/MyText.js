import { memo } from "react";
import { Text } from "react-native";

const MyText = ({ children, style, ...props }) => {
  return (
    <Text style={[{ fontFamily: "openSans" }, style]} {...props}>
      {children}
    </Text>
  );
};

export default memo(MyText);
