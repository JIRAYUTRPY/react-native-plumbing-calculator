import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import bg from "../assets/background.png";
import calculatoricon from "../assets/calculator.png";
import arrow from "../assets/arrow.png";
import info from "../assets/info.png";
import home from "../assets/home.png";
import { useState } from "react";

export default function Calculator() {
  const [measure, setMeasure] = useState("");
  const [used, setUsed] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState(0);
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }

  const cal = () => {
    console.log(used);
    console.log(unit);
    setPrice(Number(used) * Number(unit) + Number(used) * Number(unit) * 0.07);
  };

  const clear = () => {
    setMeasure("");
    setUsed("");
    setUnit("");
    setPrice("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ImageBackground source={bg} style={styles.imageBg}>
          <View style={styles.header}>
            <Image source={arrow} />
            <Text style={styles.textHeader}>บิลค่าน้ำ</Text>
          </View>
          <Image source={calculatoricon} style={styles.iconHeader} />
        </ImageBackground>
        <View>
          <Text
            style={{
              marginTop: 10,
              textAlign: "center",
              color: "#0F468C",
              fontSize: 25,
            }}
          >
            คำนวณค่าน้ำ
          </Text>
          <View style={[styles.calculatorInputBox, styles.shadowProp]}>
            <View
              style={{
                width: 350,
                height: 200,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  width: 260,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    backgroundColor: "#0F468C",
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    shadowColor: "#171717",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                  }}
                >
                  <Text style={{ color: "white" }}>มาตรวัด</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#6565651F",
                    alignItems: "center",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    flex: 0.9,
                    height: 30,
                  }}
                >
                  <TextInput
                    keyboardType="numeric"
                    onChangeText={(newText) => setMeasure(newText)}
                    value={measure}
                    style={{
                      height: 23,
                      width: 140,
                      borderRadius: 10,
                      backgroundColor: "#77BDD9",
                      height: 30,
                      textAlign: "center",
                    }}
                  />
                  <Text style={{ textAlign: "center", flex: 1 }}>นิ้ว</Text>
                </View>
              </View>
              <View
                style={{
                  width: 260,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    backgroundColor: "#0F468C",
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    shadowColor: "#171717",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                  }}
                >
                  <Text style={{ color: "white" }}>น้ำที่ใช้</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#6565651F",
                    alignItems: "center",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    flex: 0.9,
                    height: 30,
                  }}
                >
                  <TextInput
                    keyboardType="numeric"
                    onChangeText={(newText) => setUsed(newText)}
                    value={used}
                    style={{
                      height: 23,
                      width: 140,
                      borderRadius: 10,
                      backgroundColor: "#77BDD9",
                      height: 30,
                      textAlign: "center",
                    }}
                  />
                  <Text style={{ textAlign: "center", flex: 1 }}>หน่วย</Text>
                </View>
              </View>
              <View
                style={{
                  width: 260,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    backgroundColor: "#0F468C",
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    shadowColor: "#171717",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                  }}
                >
                  <Text style={{ color: "white" }}>หน่วยละ</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#6565651F",
                    alignItems: "center",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    flex: 0.9,
                    height: 30,
                  }}
                >
                  <TextInput
                    keyboardType="numeric"
                    onChangeText={(newText) => setUnit(newText)}
                    value={unit}
                    style={{
                      height: 23,
                      width: 140,
                      borderRadius: 10,
                      backgroundColor: "#77BDD9",
                      height: 30,
                      textAlign: "center",
                    }}
                  />
                  <Text style={{ textAlign: "center", flex: 1 }}>บาท</Text>
                </View>
              </View>
              <View
                style={{
                  width: 260,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    backgroundColor: "#0F468C",
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    shadowColor: "#171717",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                  }}
                >
                  <Text style={{ color: "white" }}>ภาษี 7 %</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    flex: 0.9,
                    height: 30,
                  }}
                >
                  <TextInput
                    keyboardType="numeric"
                    editable={false}
                    style={{
                      height: 23,
                      width: 70,
                      borderRadius: 10,
                      backgroundColor: "#6966661F",
                      height: 30,
                      textAlign: "center",
                    }}
                    defaultValue="0.07"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <Pressable
            onPress={clear}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "#0F468C",
              },
              {
                width: 140,
                height: 45,
                alignContent: "center",
                justifyContent: "center",
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
              },
            ]}
          >
            <Text style={{ fontSize: 24, color: "white", textAlign: "center" }}>
              CLEAR
            </Text>
          </Pressable>
          <Pressable
            onPress={cal}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "#0F468C",
              },
              {
                width: 140,
                height: 45,
                alignContent: "center",
                justifyContent: "center",
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
              },
            ]}
          >
            <Text style={{ fontSize: 24, color: "white", textAlign: "center" }}>
              ENTER
            </Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={[
              {
                height: 90,
                backgroundColor: "white",
                marginHorizontal: 20,
                borderRadius: 10,
              },
              styles.shadowProp,
            ]}
          >
            <View
              style={{
                width: 350,
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  width: 260,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 80,
                    backgroundColor: "#0F468C",
                    height: 70,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    shadowColor: "#171717",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 25 }}>ค่าน้ำ</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    flex: 1,
                    height: 70,
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      backgroundColor: "#0F468C",
                      width: "60%",
                      height: 20,
                      marginBottom: 5,
                      color: "white",
                      borderRadius: 5,
                      shadowColor: "#171717",
                      shadowOffset: { width: 0, height: 5 },
                      shadowOpacity: 0.3,
                      shadowRadius: 3,
                    }}
                  >
                    รวม
                  </Text>
                  <Text
                    style={{
                      height: 80,
                      flex: 1,
                      width: "100%",
                      borderRadius: 10,
                      height: "100%",
                      backgroundColor: "#77BDD9",
                      textAlign: "center",
                      paddingTop: 6,
                      fontSize: 25,
                    }}
                  >
                    {price}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <Pressable
              onPress={() => {
                setTimesPressed((current) => current + 1);
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgb(210, 230, 255)" : "#368FFF",
                },
                {
                  width: 140,
                  height: 60,
                  alignContent: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  borderColor: "#77BDD9",
                  borderWidth: 5,
                  shadowColor: "#171717",
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.3,
                  shadowRadius: 3,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "white",
                  textAlign: "center",
                }}
              >
                เข้าสู่ระบบ
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "15%",
            alignSelf: "center",
            justifyContent: "space-around",
            marginTop: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#0B56B5",
              height: 20,
              width: 20,
              borderRadius: "50%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#0B56B580",
              height: 20,
              width: 20,
              borderRadius: "50%",
            }}
          ></View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            flex: 1,
            flexDirection: "row",
            height: 80,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Pressable
            onPress={() => {
              setTimesPressed((current) => current + 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "#0F468C",
              },
              {
                width: "49.9%",
                height: "100%",
                alignContent: "center",
                justifyContent: "center",
                shadowColor: "#171717",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
              },
            ]}
          >
            <Image source={home} style={{ alignSelf: "center" }} />
            <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
              หน้าหลัก
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setTimesPressed((current) => current + 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "#0F468C",
              },
              {
                width: "49.9%",
                height: "100%",
                alignContent: "center",
                justifyContent: "center",
                shadowColor: "#171717",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
              },
            ]}
          >
            <Image source={info} style={{ alignSelf: "center" }} />
            <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
              ข้อมูลผู้ใช้
            </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  imageBg: {
    flex: 0.7,
    paddingLeft: 30,
  },
  textHeader: {
    color: "white",
    fontSize: 20,
    marginLeft: 40,
    fontWeight: "bold",
  },
  iconHeader: {
    position: "absolute",
    bottom: 0,
    right: "40%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    marginTop: 50,
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  calculatorInputBox: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
