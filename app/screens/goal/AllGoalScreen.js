import { StyleSheet, View } from "react-native";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoalActions } from "../../store/features/goalSlice";

import Colors from "../../config/color/Colors";
import CreateButton from "../../components/ui/CreateButton";
import GoalList from "../../components/goals/GoalList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import HeaderRight from "../../components/navigation/HeaderRight";
import HeaderTitle from "../../components/navigation/HeaderTitle";

export default function AllGoalScreen({ navigation }) {
  const data = useSelector((state) => state.goal);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [toggleSearchbar, setToggleSearchbar] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getGoalData = async () => {
      try {
        setIsLoading(true);
        const data = await AsyncStorage.getItem("goals");
        if (data) {
          dispatch(GoalActions.setGoal({ data: JSON.parse(data) }));
        }
        setIsLoading(false);
      } catch (err) {
        alert("Error Occurred, Try Again!");
      }
    };

    getGoalData();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("goals", JSON.stringify(data));
  }, [data]);

  const handleCreateGoal = useCallback(() => {
    navigation.navigate("manageGoal");
  }, []);

  const handleToggleSearchbar = useCallback(() => {
    setToggleSearchbar((pre) => !pre);
    setSearchInput("");
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          searchBarCondition={toggleSearchbar}
          onPress={handleToggleSearchbar}
        />
      ),
      headerTitle: () => (
        <HeaderTitle
          setInputValue={setSearchInput}
          inputShow={toggleSearchbar}
          title={"All Goals"}
        />
      ),
    });
  }, [toggleSearchbar]);

  // this function is filter that we search
  const filterSearchGoal = useMemo(
    () =>
      data.filter((item) => {
        return item.text
          .toLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      }),
    [data, searchInput]
  );

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <GoalList
        data={filterSearchGoal}
        emptyListMessage={searchInput ? "No Results Found." : "No Goals Yet!"}
      />
      <CreateButton onPress={handleCreateGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white000,
  },
});
