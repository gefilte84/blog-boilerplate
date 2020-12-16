import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Context as BlogContext } from "../context/BlogContext";

// useContext gjør at du får tilgang til value som du da kan bruke
// flatlist brukes til å render (skrive ut) data. Du må ha en data objekt som er objektet som inneholder blog postene
// alltid keyExtractor. velg ut det som er unikt i blogpost. title i dette tilfelle
// renderItem er en arrow funksjon (callback funksjon) som skal ha item. Item er en singel blogpost.
// så return med text og hva innenfor objektet du ønsker. I dette tilfelle så skal vi ha item.title.
const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <FontAwesome style={styles.icon} name="trash-o" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
