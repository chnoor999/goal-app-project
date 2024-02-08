import { Image, Modal, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
// react native paper
import { TextInput } from "react-native-paper";
// components
import MyBtn from "../components/MyBtn";
import BgDesign from "../components/BgDesign";
import DownBgDesign from "../components/DownBgDesign";

export default function PopupScreen({
  modalVisible,
  setModalVisible,
  btnAction,
  currentItem,
  modes,
}) {
  // inp value state
  const [value, setValue] = useState("");

  // useefffect for current text
  useEffect(() => {
    if (currentItem) {
      setValue(currentItem.text);
    }
  }, [currentItem]);

  // handlebtnAction function
  const handlebtnAction = () => {
    if (value.length) {
      btnAction(value);
      setModalVisible(false);
      currentItem ? null : setValue("");
    } else {
      alert("Must write your Goal!");
    }
  };

  //handleCancel function
  const handleCancel = () => {
    setModalVisible(false);
    currentItem ? null : setValue("");
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={[styles.container, modes && styles.modeBg]}>
        <View style={styles.imgContainer}>
          <Image source={require("../assets/goal3.png")} style={styles.img} />
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            textColor={modes ? "#fff" : "#000"}
            label={"What is your goal right now?"}
            style={[
              styles.textInp,
              {
                backgroundColor: modes ? "#222" : "#fff",
                shadowColor: modes ? "#fff" : "#000",
              },
            ]}
            theme={{
              colors: { primary: modes ? "#ced4da" : "#222" },
            }}
            value={value}
            onChangeText={(text) => setValue(text)}
          />
          <View style={styles.btnsCotainer}>
            <View style={styles.btnContainer}>
              <MyBtn mode={modes} onPressButton={handleCancel}>
                Cancel
              </MyBtn>
            </View>
            <View style={styles.btnContainer}>
              <MyBtn mode={modes} onPressButton={handlebtnAction}>
                {currentItem ? "Edit" : "Add"}
              </MyBtn>
            </View>
          </View>
        </View>

        {/* bg designs */}
        <BgDesign size={200} modes={modes} />
        <DownBgDesign size={200} modes={modes} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    overflow:"hidden"
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "50%",
    height: "50%",
  },
  contentContainer: {
    height: 150,
    justifyContent: "space-between",
  },
  textInp: {
    elevation: 8,
  },
  btnsCotainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal:45
  },
  modeText: {
    color: "#fff",
  },
  modeBg: {
    backgroundColor: "#222",
  },
  btnContainer:{
    flex:1
  }
});
