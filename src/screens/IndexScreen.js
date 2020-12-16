import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";

// useContext gjør at du får tilgang til value som du da kan bruke
// flatlist brukes til å render (skrive ut) data. Du må ha en data objekt som er objektet som inneholder blog postene
// alltid keyExtractor. velg ut det som er unikt i blogpost. title i dette tilfelle
// renderItem er en arrow funksjon (callback funksjon) som skal ha item. Item er en singel blogpost.
// så return med text og hva innenfor objektet du ønsker. I dette tilfelle så skal vi ha item.title.
const IndexScreen = () => {
  const { stae, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
