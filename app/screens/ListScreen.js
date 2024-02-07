import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
//component
import CreateBtn from "../components/CreateBtn";
import List from "../components/List";
import EditIcon from "../components/EditIcon";
import LsitMenu from "../components/LsitMenu";
import PopupScreen from "./PopupScreen";

export default function ListScreen({
  data,
  newList,
  setCurrentItem,
  editList,
  currentItem,
  deleteList,
  favList,
  listEmptyText,
  mode,
  shareGoal
}) {
  //modal visiblty state
  const [modalVisibleForNewList, setModalVisibleForNewList] = useState(false);
  const [modalVisibleForEdit, setModalVisibleForEdit] = useState(false);

  const [createBtnCondtion, setCreateBtnCondtion] = useState(true);

  return (
    <Pressable
      style={[styles.container, mode && styles.modeBg]}
      onPressIn={() => setCreateBtnCondtion(false)}
      onPressOut={() => {
        const timer = setTimeout(() => {
          setCreateBtnCondtion(true);
          return () => clearTimeout(timer);
        }, 2000);
      }}
    >
      {/* List */}
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <List
                modes={mode}
                text={item.text}
                date={item.date}
                renderRightActions={
                  <View style={styles.renderRightActionsConatiner}>
                    <View style={[styles.gestureBorder, styles.editIcon]} />
                    <EditIcon
                      modes={mode}
                      onPressButton={() => {
                        setCurrentItem(item);
                        setModalVisibleForEdit(true);
                      }}
                    />
                    <View style={styles.gestureBorder} />
                    <LsitMenu
                      modes={mode}
                      onEdit={() => {
                        setCurrentItem(item);
                        setModalVisibleForEdit(true);
                      }}
                      onDelete={() => deleteList(item.id)}
                      onFav={() => favList(item.id)}
                      FavCondition={item.fav}
                      FavCon={true}
                      shareGoal={()=>shareGoal(item.text)}
                    />
                  </View>
                }
                fav={item.fav}
              />
            );
          }}
        />
      ) : (
        <View style={styles.listEmptyContainer}>
          <Text style={styles.listEmptyText}>{listEmptyText}</Text>
        </View>
      )}

      {/* Create Button */}
      {newList && createBtnCondtion ? (
        <View style={styles.createBtn}>
          <CreateBtn
            modes={mode}
            onPressButton={() => setModalVisibleForNewList(true)}
          />
        </View>
      ) : null}
      {/* popup screen for new list */}
      <PopupScreen
        modes={mode}
        modalVisible={modalVisibleForNewList}
        setModalVisible={setModalVisibleForNewList}
        btnAction={newList}
      />
      {/* popup screen for new edit list */}
      <PopupScreen
        modes={mode}
        modalVisible={modalVisibleForEdit}
        setModalVisible={setModalVisibleForEdit}
        btnAction={editList}
        currentItem={currentItem}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
    zIndex: 10,
  },
  createBtn: {
    position: "absolute",
    bottom: 25,
    right: 18,
  },
  renderRightActionsConatiner: {
    flexDirection: "row",
  },
  gestureBorder: {
    borderLeftWidth: 1,
    borderColor: "grey",
  },
  editIcon: {
    marginLeft: 10,
  },
  listEmptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listEmptyText: {
    fontSize: 16,
    color: "grey",
  },
  modeText: {
    color: "#fff",
  },
  modeBg: {
    backgroundColor: "#222",
  },
});
