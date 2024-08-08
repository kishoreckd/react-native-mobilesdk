import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
// import { SvgXml } from 'react-native-svg'; // Uncomment if you use SVGs
// import eyeOpenSvg from './assets/eyeOpen.svg'; // Replace with your SVG paths
// import eyeClosedSvg from './assets/eyeClosed.svg'; // Replace with your SVG paths
// import googleIconSvg from './assets/googleIcon.svg'; // Replace with your SVG path

const SignupPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();

  const onSubmit = async (data) => {
    Alert.alert('Signing up', `Email: ${data.email}\nPassword: ${data.password}`);
    navigation.navigate('Home');
  };

  const isEmailValid = !errors.email;
  const isPasswordValid = !errors.password;
  const isConfirmPasswordValid = !errors.confirmPassword;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.subtitle}>Join us to get started.</Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'This field is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              {/* Uncomment and replace with SVG path if you use SVGs
              <SvgXml xml={showPassword ? eyeOpenSvg : eyeClosedSvg} width={24} height={24} /> */}
            </TouchableOpacity>
          </View>
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: 'Please confirm your password',
          validate: (value) => value === getValues('password') || 'Passwords do not match'
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm your Password"
              secureTextEntry={!showConfirmPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
              {/* Uncomment and replace with SVG path if you use SVGs
              <SvgXml xml={showConfirmPassword ? eyeOpenSvg : eyeClosedSvg} width={24} height={24} /> */}
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: '#1A1A1A',
          },
        ]}
        onPress={handleSubmit(onSubmit)}
        disabled={!isEmailValid || !isPasswordValid || !isConfirmPasswordValid}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.orLine} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        {/* Uncomment and replace with SVG path if you use SVGs
        <SvgXml xml={googleIconSvg} width={24} height={24} /> */}
        <Text style={styles.googleButtonText}>Sign Up With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signUpText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 10,
  },
  inputContainer: {
    marginBottom: 15,
    position: 'relative',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 8,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  orText: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  signUpText: {
    fontSize: 14,
    color: '#007BFF',
    textAlign: 'center',
  },
});

export default SignupPage;
