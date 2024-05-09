import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../AppNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../ThemeContext'; // Import useTheme

// Type the navigation prop
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { theme, setTheme } = useTheme(); // Use theme from context

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Conditional styling based on theme
  const backgroundColor = theme === 'light' ? '#FFFFFF' : '#303030'; // Explicit hex color values
  const textColor = theme === 'light' ? '#1F1F1F' : '#FFFFFF'; // Adjusted for better contrast
  const borderColor = theme === 'light' ? '#CCCCCC' : '#444444'; // Black for dark theme
  const placeholderColor = theme === 'light' ? '#999999' : '#A0A0A0'; // Adjusted for visibility

  return (
    <View style={{ flex: 1, backgroundColor, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <StatusBar backgroundColor={backgroundColor} barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <TouchableOpacity style={styles.themeIcon} onPress={toggleTheme}>
        <Icon name={theme === 'light' ? 'weather-night' : 'white-balance-sunny'} size={24} color={textColor} />
      </TouchableOpacity>
      <View style={{ width: '100%', maxWidth: 400, backgroundColor, borderRadius: 8, padding: 24, borderWidth: 1, borderColor }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', color: textColor, marginBottom: 32 }}>
          Sign In
        </Text>

        <TextInput
          style={{ backgroundColor: '#F0F0F0', borderColor, padding: 16, borderRadius: 8, marginBottom: 20, fontSize: 18, color: textColor }}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoComplete="email"
          placeholderTextColor={placeholderColor}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F0F0', borderColor, borderRadius: 8, marginBottom: 32 }}>
          <TextInput
            style={{ flex: 1, padding: 16, fontSize: 18, color: textColor }}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            textContentType="password"
            autoComplete="password"
            placeholderTextColor={placeholderColor}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={{ padding: 8 }}>
            <Icon name={passwordVisible ? 'eye-off' : 'eye'} size={24} color={placeholderColor} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 16, borderRadius: 8, alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>
            Login
          </Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 24, textAlign: 'center', fontSize: 14, color: textColor }}>
          Don't have an account? 
          <Text style={{ color: '#007AFF', fontWeight: 'bold' }} onPress={() => navigation.navigate('Signup')}>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  themeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10
  }
});

export default Login;
