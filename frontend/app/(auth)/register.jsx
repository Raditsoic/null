import { Alert, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';

import { FormField, CustomButton, AuthPageButton } from '../../components';

const Register = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = () => {
    if (!emailRegex.test(form.email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: "Please use a proper email" }));
      return false;
    }
    setErrors(prevErrors => ({ ...prevErrors, email: "" }));
    return true;
  };

  const validatePassword = () => {
    let valid = true;

    if (form.password.length < 6 && form.password !== "") {
      setErrors(prevErrors => ({ ...prevErrors, password: "Password must be at least 6 characters long" }));
      valid = false;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, password: "" }));
    }

    if (form.password !== form.confirmPassword) {
      setErrors(prevErrors => ({ ...prevErrors, confirmPassword: "Password does not match" }));
      valid = false;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, confirmPassword: "" }));
    }

    return valid;
  };

  const submit = () => {
    if (form.email === "" || form.password === "" || form.confirmPassword === "") {
      Alert.alert("Please fill all the fields");
      return;
    }

    if (!validateEmail() || !validatePassword()) {
      return;
    }

    setSubmitting(true);

    // Simulate API request
    console.log("Register with:", form);
    setTimeout(() => {
      setSubmitting(false);
      Alert.alert("Registered successfully");
    }, 2000);
  };

  useEffect(() => {
    validatePassword();
  }, [form.password, form.confirmPassword]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="min-h-[100px]">
          <AuthPageButton page="register" />
        </View>

        <View className="bg-secondary min-h-[700px] rounded-t-3xl">
          <Text className="text-black font-pbold text-3xl pt-6 pl-4">
            Sign Up
          </Text>

          <Text className="text-black font-vmedium text-base pt-1 pl-4 pb-5">
            Please fill this form to create your new account
          </Text>

          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeText={(e) => {
              setForm({ ...form, email: e });
              validateEmail();
            }}
            keyboardType="email-address"
            textStyles={"text-white font-pmedium text-lg"}
            textInputStyles={errors.email ? "border-2 border-red-500" : ""}
          />
          {errors.email && <Text className="text-danger text-sm ml-4 mt-1 font-vmedium">{errors.email}</Text>}

          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
            otherStyles={"mt-4"}
            textStyles={"text-white font-pmedium text-lg"}
            textInputStyles={errors.password ? "border-2 border-red-500" : ""}
          />
          {errors.password && <Text className="text-danger text-sm ml-4 mt-1 font-vmedium">{errors.password}</Text>}

          <FormField
            title="Confirm Password"
            value={form.confirmPassword}
            placeholder="Confirm your password"
            handleChangeText={(e) => {
              setForm({ ...form, confirmPassword: e });
            }}
            otherStyles={"mt-4"}
            textStyles={"text-white font-pmedium text-lg"}
            textInputStyles={errors.confirmPassword ? "border-2 border-red-500" : ""}
          />
          {errors.confirmPassword && <Text className="text-danger text-sm ml-4 mt-1 font-vmedium">{errors.confirmPassword}</Text>}

          <CustomButton
            title="Sign Up"
            containerStyles={"mt-10 bg-black h-12 rounded-xl mx-4"}
            textStyles={"text-white text-lg font-psemibold"}
            isLoading={isSubmitting}
            handlePress={submit}
          />

          <View className="flex justify-center items-center">
            <Text className="mt-2 font-pmedium">
              Already have an account?
              <Link href="/login" className="text-primary"> Sign In here</Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
