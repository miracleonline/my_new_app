import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { TextInput, Button, Text, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '../api';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const res = await signUp({ email, password });
      localStorage.setItem('token', res.data.token);
      Alert.alert('Sign up successful!');
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Error during sign up', error.response?.data?.msg || 'Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Sign Up
      </Text>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Sign Up
      </Button>
      <TouchableRipple onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>
          Already have an account? Login here
        </Text>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  loginLink: {
    marginTop: 16,
    textAlign: 'center',
    color: '#6200ee',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
