import React from "react";
import {
  Dimensions,
  Image,
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOver = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/original.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <BodyText style={styles.textContainer}>
          Number of Rounds cost you is{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> to guess{" "}
          <Text style={styles.highlight}> {props.userNumber}</Text>{" "}
        </BodyText>

        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: 1,
    marginVertical: Dimensions.get("window").height / 30,
  },
  buttonSt: {
    marginVertical: 50,
  },
  highlight: {
    color: Colors.primary,
    fontSize: 25,
    fontFamily: "open-sans-bold",
  },
  textContainer: {
    marginVertical: 20,
  },
});

export default GameOver;
