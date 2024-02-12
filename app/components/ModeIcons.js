// constant colors
import Colors from "../config/Colors";
// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function ModeIcons({ radioChecked }) {
  switch (radioChecked) {
    case "system":
      return (
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={22}
          color={Colors.grey000}
        />
      );
    case "light":
      return <Feather name="sun" size={22} color={Colors.grey000} />;
    case "dark":
      return <FontAwesome name="moon-o" size={22} color={Colors.grey000} />;
  }
}
