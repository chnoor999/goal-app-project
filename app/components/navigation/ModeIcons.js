import { memo } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Colors from "../../config/color/Colors";

const ModeIcons = () => {
  const modeType = useSelector((state) => state.mode.type);

  switch (modeType) {
    case "system":
      return (
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={22}
          color={Colors.grey000}
        />
      );
    case "light":
      return <Ionicons name="sunny-outline" size={22} color={Colors.grey000} />;
    case "dark":
      return <FontAwesome name="moon-o" size={22} color={Colors.grey000} />;
  }
};

export default memo(ModeIcons);
