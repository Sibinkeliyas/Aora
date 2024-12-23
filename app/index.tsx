import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { images } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/common/CustomButton";
import { router } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
          <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
          <View className="relative mt-5">
            <Text className="text-3xl font-bold text-center text-white">
              Discover Endler Possibilities With <Text className="text-secondary-200 inline-block">Aora</Text>
            </Text>
            <Image source={images.path} className="w-[130px] h-[15px] absolute -bottom-2 right-24" resizeMode="contain" />
          </View>
          <Text className="font-pregular text-gray-100 text-sm mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
          </Text>
          <CustomButton handlePress={() => router.push("/(auth)/Sign-in")} title="Continue with Email" className="mt-7 w-full" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
