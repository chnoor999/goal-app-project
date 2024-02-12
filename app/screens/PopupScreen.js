import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
// react native paper
import { TextInput } from "react-native-paper";
// constant colors
import Colors from "../config/Colors";
// components
import MyBtn from "../components/MyBtn";
import BgDesign from "../components/BgDesign";
import DownBgDesign from "../components/DownBgDesign";

// mobile width
const windowWidth = Dimensions.get("window").width;

export default function PopupScreen({
  modalVisible,
  setModalVisible,
  btnAction,
  currentItem,
  modes,
}) {
  // mobilw width dynamic
  const { width } = useWindowDimensions();

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
        <View
          style={[
            styles.contentContainer,
            {
              height:
                windowWidth < 380
                  ? width > 500
                    ? 120
                    : 140
                  : width > 500
                  ? 140
                  : 150,
            },
          ]}
        >
            <TextInput
              textColor={modes ? Colors.white000 : Colors.black000}
              label={"What is your goal right now?"}
              style={[
                styles.textInp,
                {
                  backgroundColor: modes ? Colors.black200 : Colors.white000,
                  shadowColor: modes ? Colors.white000 : Colors.black000,
                },
              ]}
              theme={{
                colors: {
                  primary: modes ? Colors.white200 : Colors.black200,
                },
              }}
              value={value}
              onChangeText={(text) => setValue(text)}
              multiline={true}
            />
          <View
            style={[
              styles.btnsCotainer,
              {
                paddingHorizontal:
                  windowWidth < 380
                    ? width > 500
                      ? 150
                      : 40
                    : width > 500
                    ? 220
                    : 45,
              },
            ]}
          >
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
        <BgDesign size={windowWidth < 380 ? 150 : 180} modes={modes} />
        <DownBgDesign size={windowWidth < 380 ? 150 : 180} modes={modes} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: windowWidth < 380 ? 12 : 20,
    overflow: "hidden",
    paddingBottom: 150,
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  contentContainer: {
    justifyContent: "space-between",
    gap: 20,
  },
  textInp: {
    elevation: 8,
    width: "100%",
    maxWidth: windowWidth < 380 ? 400 : 500,
    alignSelf: "center",
  },
  btnsCotainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  modeText: {
    color: Colors.white000,
  },
  modeBg: {
    backgroundColor: Colors.black200,
  },
  btnContainer: {
    flex: 1,
  },
});
