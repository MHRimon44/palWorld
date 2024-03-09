import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/pokemonCard";
export default function App() {
  const charmenderData = {
    name: "Charmender",
    image: require("./assets/charmander.jpg"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };
  const squirtleData = {
    name: "squirtle",
    image: require("./assets/squirtle.jpg"),
    type: "Water",
    hp: 78,
    moves: ["Tackle", "Water Gun", "Trail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };
  const bulbashaurData = {
    name: "Bulbashaur",
    image: require("./assets/bulbashaur.jpg"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };
  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.jpg"),
    type: "Electric",
    hp: 68,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmenderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbashaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0ffff",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});
