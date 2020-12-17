import React from "react";
import IndexScreen from "./src/screens/IndexScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider as BlogProvider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogger",
    },
  }
);

const App = createAppContainer(navigator);

// custom komponent for å bruke context. Context er det samme som props bare at den kan kommunisere
// direkte ned til under child (barnebarn) uten å gå igjennom andre child
// App inne i blogprovider er nå children i BlogContext. De er det samme
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
