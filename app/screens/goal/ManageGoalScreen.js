import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Logo from "../../components/ui/Logo";
import GoalForm from "../../components/manageGoal/GoalForm";
import Colors from "../../config/color/Colors";

export default function ManageGoalScreen() {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <View style={[styles.container, mode && styles.containerMode]}>
      <Logo width={hp(10)} height={hp(10)} style={styles.logo} />
      <GoalForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: wp(4),
  },
  containerMode: {
    backgroundColor: Colors.black200,
  },
  logo: {
    marginVertical: hp(5),
  },
});
