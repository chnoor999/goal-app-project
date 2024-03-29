import { Pressable, StyleSheet} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoalActions } from "../../store/features/goalSlice";

import Colors from "../../config/color/Colors";
import CreateButton from "../../components/ui/CreateButton";
import GoalList from "../../components/goals/GoalList";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const [showCreateBtn, setShowCreateButton] = useState(true);

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

  const handlePressIn = () => {
    setShowCreateButton(false);
  };

  const handlePressOut = () => {
    setTimeout(() => {
      setShowCreateButton(true);
    }, 2000);
  };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <Pressable
      style={styles.container}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {filterSearchGoal.length ? (
        <GoalList
          data={filterSearchGoal}
          onPressOut={handlePressOut}
          onPressIn={handlePressIn}
        />
      ) : (
        <MessageOverlay
          message={searchInput ? "No Results Found." : "No Goals Yet!"}
        />
      )}
      {showCreateBtn && <CreateButton onPress={handleCreateGoal} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white000,
    position: "relative",
  },
});
