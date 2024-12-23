import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/common/FormField";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="w-full h-full">
        <View className="w-full items-start justify-start h-full px-4 my-6">
          <Image source={images.logo} resizeMode="center" className="w-[55px] self-start" />
          <Text className="text-2xl text-white mt-10 font-psemibold">Log In to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
            keyboardType="email-type"
            placeHolder="Enter Your Email"
            className="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
