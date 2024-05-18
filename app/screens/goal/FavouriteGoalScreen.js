import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

import GoalList from "../../components/goals/GoalList";
import MessageOverlay from "../../components/ui/MessageOverlay";
import HeaderRight from "../../components/navigation/HeaderRight";
import HeaderTitle from "../../components/navigation/HeaderTitle";

export default function FavouriteGoalScreen({ navigation }) {
  const data = useSelector((state) => state.goal);

  const filterFavourites = data.filter((item) => item.fav === true);

  const [toggleSearchbar, setToggleSearchBar] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleToggleSearchbar = () => {
    setToggleSearchBar((pre) => !pre);
    setSearchInput("");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          onPress={handleToggleSearchbar}
          searchBarCondition={toggleSearchbar}
        />
      ),
      headerTitle: () => (
        <HeaderTitle
          title={"Favourite Goals"}
          inputShow={toggleSearchbar}
          inputValue={searchInput}
          setInputValue={setSearchInput}
        />
      ),
    });
  }, [toggleSearchbar]);

  // this filtering goal that we search
  const filterSearchGoal = filterFavourites.filter((item) => {
    return item.text.toLowerCase().includes(searchInput);
  });

  return filterSearchGoal.length ? (
    <GoalList data={filterSearchGoal} />
  ) : (
    <MessageOverlay
      message={searchInput ? "No Results Found." : "No Favourites Yet!"}
    />
  );
}

