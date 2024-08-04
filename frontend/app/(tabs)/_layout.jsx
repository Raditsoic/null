import React from 'react';
import { Text, View, Image } from 'react-native';
import { Tabs } from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex justify-center items-center">
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6 mb-1"
      />
      <Text className={`text-xs ${focused ? "font-bold" : "font-medium"}`} style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FF9C01',
        tabBarInactiveTintColor: '#FFFEFD',
        tabBarStyle: {
          backgroundColor: '#13131C',
          height: 68,
        },        
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'community',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.community}
              color={color}
              name="community"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chatbot"
        options={{
          title: 'chatbot',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.chatbot}
              color={color}
              name="chatbot"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs >
  );
};

export default TabsLayout;
