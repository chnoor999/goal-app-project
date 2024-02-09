import {
  Share,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
// constant colors
import Colors from "../config/Colors";
//navigation
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
// async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
//screens
import ListScreen from "./ListScreen";
import RightMenu from "../components/RightMenu";
import RightInp from "../components/RightInp";
import HeaderText from "../components/HeaderText";
import SearchIcon from "../components/SearchIcon";
import DrawerLabel from "../components/DrawerLabel";
import DrawerIcon from "../components/DrawerIcon";
import Mode from "../components/Mode";
import DrawerImage from "../components/DrawerImage";
import WelcomeScreen from "./WelcomeScreen";
import BgDesign from "../components/BgDesign";
import DownBgDesign from "../components/DownBgDesign";

export default function MainScreen() {
  // state for keep splash screen
  const [appIsReady, setAppIsReady] = useState(false);

  // data state
  const [data, setData] = useState([]);

  // radio button checked ot unchecked state
  const [radioChecked, setRadioChecked] = useState("system");

  // async storage function
  const setLocalStorage = async (a, b) => {
    await AsyncStorage.setItem(a, JSON.stringify(b));
  };
  const getLocalStorage = async (a, b) => {
    const res = await AsyncStorage.getItem(a);
    if (res !== null) {
      b(JSON.parse(res));
    }
    setAppIsReady(true);
  };

  // mode condition in storage
  useEffect(() => {
    getLocalStorage("mode", setRadioChecked);
  }, []);

  useEffect(() => {
    setLocalStorage("mode", radioChecked);
  }, [radioChecked]);

  // geting data from storage
  useEffect(() => {
    getLocalStorage("data", setData);
  }, []);

  // setting data to storage
  useEffect(() => {
    setLocalStorage("data", data);
  }, [data]);

  // filtered data for search
  const [filteredData, setFilteredData] = useState("");

  // favourites screen data
  const [favouritesData, setFavouritesData] = useState([]);

  // filtered favourites data
  const [filteredFavouritesData, setFilteredFavouritesData] = useState("");

  // state for search bar visiblty condition
  const [searchBarCondition, setSearchBarCondition] = useState(false);

  // mode condition state
  const [darkMode, setDarkMode] = useState(false);

  // state for condition of welcome screen
  const [welcomeShown, setWelcomeShown] = useState(true);

  // hiding welcome screen after few second
  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeShown(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  // new list
  const newList = (value) => {
    const obj = {
      id: Math.random() * 1000,
      text: value,
      date: new Date().getDate() + "/" + (new Date().getMonth() + 1),
      fav: false,
    };
    setData((preValue) => [obj, ...preValue]);
  };

  // currentItem State
  const [currentItem, setCurrentItem] = useState("");

  // edit list
  const editList = (values) => {
    setData((preValue) => {
      return preValue.map((item, index) => {
        if (item.id == currentItem.id) {
          return {
            ...item,
            text: values,
          };
        } else {
          return item;
        }
      });
    });
  };

  // delete list
  const deleteList = (id) => {
    setData((value) => {
      return value.filter((item) => {
        if (item.id != id) {
          return true;
        }
      });
    });
  };

  // favList
  const favList = (id) => {
    setData((preValue) => {
      return preValue.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            fav: !item.fav,
          };
        } else {
          return item;
        }
      });
    });
  };

  // focusing a input field
  const focusInp = useRef(null);
  useEffect(() => {
    if (searchBarCondition) {
      if (focusInp.current) {
        focusInp.current.focus();
      }
    }
  }, [searchBarCondition]);

  // searched value data
  const [searchData, setSearchData] = useState("");
  // search goals function
  const searchGoals = (a) => {
    return data.filter((item) => {
      if (item.text.toLowerCase().includes(a.toLowerCase())) {
        return item;
      }
    });
  };
  // useeffect for store filterData in state
  useEffect(() => {
    const filtered = searchGoals(searchData);
    setFilteredData(filtered);
  }, [searchData, data]);

  // data for favourites screen
  useEffect(() => {
    const filter = data.filter((item) => {
      if (item.fav == true) {
        return item;
      }
    });
    setFavouritesData(filter);
  }, [data]);

  // stuff for searching data for favourites screen
  // search data state
  const [searchDataForFavourites, setSearchDataForFavourites] = useState("");

  // useref to focus inp
  const focusInpForFavourites = useRef();

  // condition rendering for search icon
  const [searchbarConditionForFavourites, setSearchbarConditionForFavourites] =
    useState(false);

  // focusing inp when inp is shown
  useEffect(() => {
    if (searchbarConditionForFavourites) {
      if (focusInpForFavourites.current) {
        focusInpForFavourites.current.focus();
      }
    }
  }, [searchbarConditionForFavourites]);

  // favourites goal search function
  const searchFavourites = (a) => {
    return favouritesData.filter((item) => {
      if (item.text.toLowerCase().includes(a.toLowerCase())) {
        return item;
      }
    });
  };
  // storing filtered favourites goals
  useEffect(() => {
    let filtered = searchFavourites(searchDataForFavourites);
    setFilteredFavouritesData(filtered);
  }, [searchDataForFavourites, favouritesData]);

  // share function
  const shareGoal = (goalText) => {
    Share.share({ message: goalText });
  };

  // toggle radio function
  const toggleRadio = (radioButtonName) => {
    setRadioChecked(radioButtonName);
  };

  // system theme
  const theme = useColorScheme();

  // stuff to set mode
  useEffect(() => {
    if (radioChecked == "light") {
      setDarkMode(false);
    } else if (radioChecked == "dark") {
      setDarkMode(true);
    } else if (radioChecked == "system") {
      if (theme == "light") {
        setDarkMode(false);
      } else if (theme == "dark") {
        setDarkMode(true);
      }
    }
  }, [radioChecked, theme]);

  return appIsReady ? (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={darkMode ? Colors.black200 : Colors.white000}
        barStyle={darkMode ? "light-content" : "dark-content"}
        translucent={true}
      />

      {/* //////////////////////////welcome screen//////////////////////////// */}
      <WelcomeScreen visible={welcomeShown} mode={darkMode} />

      <View style={styles.container}>
        <Drawer.Navigator
          drawerContent={(props) => {
            return (
              <View style={styles.drawerContentContainer}>
                <BgDesign size={170} modes={darkMode} />
                <DownBgDesign size={170} modes={darkMode} />
                <DrawerImage />
                <DrawerItemList {...props} />
                <Mode
                  mode={darkMode}
                  radioChecked={radioChecked}
                  toggleRadio={toggleRadio}
                />
              </View>
            );
          }}
          screenOptions={{
            drawerActiveBackgroundColor: darkMode
              ? Colors.black400
              : Colors.white300,
            drawerActiveTintColor: darkMode ? Colors.white000 : Colors.black000,
            drawerInactiveTintColor: darkMode ? "#e9ecef" : Colors.black200,
            headerTintColor: darkMode ? Colors.white000 : Colors.black000,
            headerStyle: {
              backgroundColor: darkMode ? Colors.black200 : Colors.white000,
            },
            drawerStyle: {
              backgroundColor: darkMode ? Colors.black200 : Colors.white000,
            },
          }}
        >
          {/*/////////////////////// Goals screen/////////////////////////////////// */}
          <Drawer.Screen
            name="All Goals"
            //   options........
            options={{
              headerRight: () => {
                return (
                  <View style={styles.headerRightContaienr}>
                    <SearchIcon
                      mode={darkMode}
                      searchBarCondition={searchBarCondition}
                      onPressButton={() => {
                        setSearchBarCondition((value) => !value);
                        setSearchData("");
                      }}
                    />
                    <RightMenu mode={darkMode} />
                  </View>
                );
              },
              headerTitle: () =>
                searchBarCondition ? (
                  <RightInp
                    mode={darkMode}
                    myRef={focusInp}
                    setSearchData={setSearchData}
                    myPlaceholder={"Search Goals"}
                  />
                ) : (
                  <HeaderText mode={darkMode}>All Goals</HeaderText>
                ),
              drawerLabel: ({ size, color, focused }) => (
                <DrawerLabel
                  size={size}
                  color={color}
                  focused={focused}
                  title={"All Goals"}
                  count={data.length}
                  icon={<DrawerIcon goal={true} />}
                />
              ),
            }}
          >
            {() => {
              return (
                <ListScreen
                  mode={darkMode}
                  data={filteredData}
                  newList={newList}
                  setCurrentItem={setCurrentItem}
                  currentItem={currentItem}
                  editList={editList}
                  deleteList={deleteList}
                  favList={favList}
                  listEmptyText={
                    searchData ? "No results found" : "No Goals Yet!"
                  }
                  shareGoal={shareGoal}
                />
              );
            }}
          </Drawer.Screen>

          {/* /////////////////////////Favourites screen////////////////////////////// */}
          <Drawer.Screen
            name="Favourites"
            //   options...........
            options={{
              headerTitle: () =>
                searchbarConditionForFavourites ? (
                  <RightInp
                    myRef={focusInpForFavourites}
                    setSearchData={setSearchDataForFavourites}
                    myPlaceholder={"Search Favourites"}
                    mode={darkMode}
                  />
                ) : (
                  <HeaderText mode={darkMode}>Favourites</HeaderText>
                ),
              headerRight: () => {
                return (
                  <View style={styles.headerRightContaienr}>
                    <SearchIcon
                      mode={darkMode}
                      searchBarCondition={searchbarConditionForFavourites}
                      onPressButton={() => {
                        setSearchbarConditionForFavourites((value) => !value);
                        setSearchDataForFavourites("");
                      }}
                    />
                    <RightMenu mode={darkMode} />
                  </View>
                );
              },
              drawerLabel: ({ size, color, focused }) => (
                <DrawerLabel
                  size={size}
                  color={color}
                  focused={focused}
                  title={"Favourites"}
                  count={favouritesData.length}
                  icon={<DrawerIcon star={true} />}
                />
              ),
            }}
          >
            {() => (
              <ListScreen
                mode={darkMode}
                data={filteredFavouritesData}
                setCurrentItem={setCurrentItem}
                currentItem={currentItem}
                editList={editList}
                deleteList={deleteList}
                favList={favList}
                listEmptyText={
                  searchDataForFavourites
                    ? "No results found"
                    : "No Favourites Yet!"
                }
                shareGoal={shareGoal}
              />
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      </View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRightContaienr: {
    flexDirection: "row",
  },
  darkText: {
    color: Colors.white000,
  },
  darkBg: {
    backgroundColor: "#212529",
  },
  drawerContentContainer: { flex: 1, overflow: "hidden" },
});
