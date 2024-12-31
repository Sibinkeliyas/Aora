import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/common/FormField";
import CustomButton from "@/components/common/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "@/lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({ userName: "", email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const submitForm = async () => {
    try {
      if (!form.email || !form.password || !form.userName) {
        Alert.alert("Please fill all the fields");
        return;
      }
      setSubmitting(true);
      const result = await createUser(form.email, form.password, form.userName);
      if (result) {
        Alert.alert("User Created Successfully");
      }
    } catch (error) {
      Alert.alert("Something went wrong");
    } finally {
      router.replace("/(tabs)/Home");
      setSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="w-full h-full">
        <View className="w-full items-start justify-start h-full px-4 my-6">
          <Image source={images.logo} resizeMode="center" className="!w-full !h-[25px] self-start" />
          <Text className="text-2xl text-white  font-psemibold mt-2">Sign Up to Aora</Text>
          <FormField
            title="User Name"
            value={form.userName}
            handleChange={(value) => setForm((prev) => ({ ...prev, userName: value }))}
            keyboardType="email-type"
            placeHolder="Enter Your Email"
            className="mt-7 w-full"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
            keyboardType="email-type"
            placeHolder="Enter Your Email"
            className="mt-7 w-full"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChange={(value) => setForm((prev) => ({ ...prev, password: value }))}
            keyboardType="password-type"
            placeHolder="Enter Your Password"
            className="mt-7 w-full"
            secureTextEntry
          />
          <CustomButton title="Sign Up" className="mt-7 w-full" handlePress={submitForm} isLoading={submitting} />
          <View className="justify-center pt-5 flex-row gap-2 items-center w-full">
            <Text className="text-lg text-gray-100 font-pregular">Have an account already? </Text>
            <Link href="/(auth)/Sign-up" className="text-secondary-200 text-lg font-psemibold">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
