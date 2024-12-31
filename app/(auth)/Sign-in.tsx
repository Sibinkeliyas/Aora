import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/common/FormField";
import CustomButton from "@/components/common/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "@/lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const submitForm = async () => {
    try {
      if (!form.email || !form.password) {
        Alert.alert("Please fill all the fields");
        return;
      }
      setSubmitting(true);
      const result = await signIn(form.email, form.password);
      if (result) {
        Alert.alert("User Created Successfully");
        router.replace("/(tabs)/Home");
      }
    } catch (error) {
      Alert.alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="w-full h-full">
        <View className="w-full items-start justify-start h-full px-4 my-6">
          <Image source={images.logo} resizeMode="center" className="!w-full !h-[25px] self-start" />
          <Text className="text-2xl text-white  font-psemibold mt-2">Log In to Aora</Text>
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
          <CustomButton title="Log In" className="mt-7 w-full" handlePress={submitForm} isLoading={submitting} />
          <View className="justify-center pt-5 flex-row gap-2 items-center w-full">
            <Text className="text-lg text-gray-100 font-pregular">Dont have an account</Text>
            <Link href="/(auth)/Sign-up" className="text-secondary-200 text-lg font-psemibold">
              Click Here
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
