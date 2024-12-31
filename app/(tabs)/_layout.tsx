import React from "react";
import { Image, Text, View } from "react-native";
import { Tabs } from "expo-router";

import { icons } from "../../constants";

const TabIcon = ({
  icon,
  size,
  focused,
  color,
  name,
}: {
  icon: any;
  size: number;
  focused: boolean;
  color: string;
  name: string;
}) => {
  return (
    <View className="justify-center items-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="!w-6 !h-6" />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-[10px] sm:text-xs text-nowrap whitespace-nowrap `}
        numberOfLines={1}
        style={{ color }}
        ellipsizeMode="tail"
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopColor: "#232533",
            height: 84,
            borderTopWidth: 1,
            paddingTop: 15,
            borderRadius: 4
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon name="Home" focused={focused} icon={icons.home} size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon name="Create" focused={focused} icon={icons.plus} size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon name="Profile" focused={focused} icon={icons.profile} size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon name="Saved" focused={focused} icon={icons.bookmark} size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
