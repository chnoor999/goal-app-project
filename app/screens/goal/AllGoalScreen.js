import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../../config/color/Colors";
import CreateButton from "../../components/ui/CreateButton";
import GoalList from "../../components/goals/GoalList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoalActions } from "../../store/features/goalSlice";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import MessageOverlay from "../../components/ui/MessageOverlay";
import HeaderRight from "../../components/navigation/HeaderRight";
import HeaderTitle from "../../components/navigation/HeaderTitle";

export default function AllGoalScreen({ navigation }) {
  const data = useSelector((state) => state.goal);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [toggleSearchbar, setToggleSearchbar] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem("goals");
      if (data) {
        dispatch(GoalActions.setGoal({ data: JSON.parse(data) }));
      }
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("goals", JSON.stringify(data));
  }, [data]);

  const handleCreateGoal = () => {
    navigation.navigate("manageGoal");
  };

  const handleToggleSearchbar = () => {
    setToggleSearchbar((pre) => !pre);
    setSearchInput("");
  };

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
          inputValue={searchInput}
          setInputValue={setSearchInput}
          inputShow={toggleSearchbar}
          title={"All Goals"}
        />
      ),
    });
  }, [toggleSearchbar]);

  // this function is filter that we search
  const filterSearchGoal = data.filter((item) => {
    return item.text.toLowerCase().includes(searchInput.toLocaleLowerCase());
  });

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      {filterSearchGoal.length ? (
        <GoalList data={filterSearchGoal} />
      ) : (
        <MessageOverlay
          message={searchInput ? "No Results Found." : "No Goals Yet!"}
        />
      )}
      <CreateButton onPress={handleCreateGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white000,
    position: "relative",
  },
});
