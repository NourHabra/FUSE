import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Signup = () => {
  return (
    <View className="flex-1 bg-gray-50 p-4 justify-center items-center">
      <View style={{
          width: '100%',
          maxWidth: 350,
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 24,
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderWidth: 1,
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(30, 144, 255, 0.5)', // subtle blue underglow
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
        }}>
        <Text className="text-4xl font-bold text-center text-gray-900 mb-8">
          Sign Up
        </Text>

        <TextInput
          className="bg-gray-100 border border-gray-300 p-4 rounded-lg mb-5 text-lg"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoComplete="email"
          placeholderTextColor="gray-500"
        />

        <TextInput
          className="bg-gray-100 border border-gray-300 p-4 rounded-lg mb-5 text-lg"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          autoComplete="password"
          placeholderTextColor="gray-500"
        />

        <TextInput
          className="bg-gray-100 border border-gray-300 p-4 rounded-lg mb-8 text-lg"
          placeholder="Confirm Password"
          secureTextEntry
          textContentType="password"
          autoComplete="password"
          placeholderTextColor="gray-500"
        />

        <TouchableOpacity className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg items-center shadow-md">
          <Text className="text-white text-xl font-semibold">
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <Text className="text-blue-600 font-semibold">Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
