import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import GoalList from "../../components/goals/GoalList";
import HeaderRight from "../../components/navigation/HeaderRight";
import HeaderTitle from "../../components/navigation/HeaderTitle";

export default function FavouriteGoalScreen({ navigation }) {
  const data = useSelector((state) => state.goal);

  const filterFavourite = useMemo(
    () => data.filter((item) => item.fav === true),
    [data]
  );

  const [toggleSearchbar, setToggleSearchBar] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleToggleSearchbar = useCallback(() => {
    setToggleSearchBar((pre) => !pre);
    setSearchInput("");
  }, []);

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
          setInputValue={setSearchInput}
        />
      ),
    });
  }, [toggleSearchbar]);

  // this filtering goal that we search
  const filterSearchGoal = useMemo(
    () =>
      filterFavourite.filter((item) => {
        return item.text.toLowerCase().includes(searchInput);
      }),
    [filterFavourite, searchInput]
  );

  return (
    <GoalList
      data={filterSearchGoal}
      emptyListMessage={
        searchInput ? "No Results Found." : "No Favourites Yet!"
      }
    />
  );
}
