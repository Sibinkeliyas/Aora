import { View, Text } from "react-native";
import React, { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
      ListHeaderComponent={<Text>Header</Text>}
        data={[{ id: 1 }]}
        renderItem={({ item }) => <Fragment key={item.id}>{item.id}</Fragment>}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
};

export default Home;
