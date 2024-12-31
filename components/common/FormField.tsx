import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

const FormField = ({
  handleChange,
  keyboardType,
  title,
  value,
  className,
  placeHolder,
  secureTextEntry = false,
}: {
  title: string;
  value: string;
  handleChange: (e: string) => void;
  className?: string;
  keyboardType: string;
  placeHolder: string;
  secureTextEntry?: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${className}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 mt-7 bg-black-100 rounded-2xl border-2  flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base w-full border-none focus:!border-none border-2 focus:outline-none  h-full"
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChange}
          secureTextEntry={secureTextEntry && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className="!w-6 !h-6" resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
