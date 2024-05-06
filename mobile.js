import React from 'react';
import { View, TextInput, Button, StyleSheet, useWindowDimensions } from 'react-native';

const LoginScreen = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={[styles.container, isLandscape && styles.containerLandscape]}>
      <LoginComponent />
    </View>
  );
};

const LoginComponent = () => {
  return (
    <View style={styles.loginContainer}>
      <TextInput style={styles.input} placeholder="Username" keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => {}} />
        <Button title="Forgot Password" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLandscape: {
    flexDirection: 'row',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center', // Align vertically
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default LoginScreen;
