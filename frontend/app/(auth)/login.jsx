import { Alert, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';

import { FormField, CustomButton, AuthPageButton } from '../../components';

const Login = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [errors, setErrors] = useState({
    email: "",
    password: "",
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
    if (form.password.length < 6 && form.password !== "") {
      setErrors(prevErrors => ({ ...prevErrors, password: "Password must be more than 6 characters long" }));
      return false;
    }
    setErrors(prevErrors => ({ ...prevErrors, password: "" }));
    return true;
  };

  const submit = () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Please fill all the fields");
      return;
    }

    if (!validateEmail() || !validatePassword()) {
      return;
    }

    setSubmitting(true);

    // Simulate API request
    console.log("Logging in with:", form);
    setTimeout(() => {
      setSubmitting(false);
      Alert.alert("Logged in successfully");
    }, 2000);
  };

  useEffect(() => {
    validatePassword();
  }, [form.password]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="min-h-[100px]">
          <AuthPageButton page="login" />
        </View>

        <View className="bg-secondary min-h-[700px] rounded-t-3xl">
          <Text className="text-black font-pbold text-3xl pt-6 pl-4">
            Sign In
          </Text>

          <Text className="text-black font-vmedium text-base pt-1 pl-4 pb-5">
            Please fill this form to sign in to your account
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

          <CustomButton
            title="Sign In"
            containerStyles={"mt-10 bg-black h-12 rounded-xl mx-4"}
            textStyles={"text-white text-lg font-psemibold"}
            isLoading={isSubmitting}
            handlePress={submit}
          />

          <View className="flex justify-center items-center">
            <Text className="mt-2 font-pmedium">
              Don't have an account?
              <Link href="/register" className="text-primary"> Sign Up here</Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
