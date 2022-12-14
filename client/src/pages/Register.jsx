import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";

const Register = () => {
  const submit = async (values) => {
    const res = await axios.post(
      "http://localhost:3001/auth/register",
      JSON.parse(JSON.stringify(values, null, 2))
    );
    console.log(res.data);
  };

  return (
    <div className="auth">
      <h1>Регистрация</h1>
      <p>Для входа в чат, вам нужно зарегистрироваться</p>
      <Flex bg="gray.100" align="center" justify="center">
        <Box bg="white" p={6} rounded="md" w="400px" boxShadow="lg">
          <Formik
            initialValues={{
              email: "",
              name: "",
              password: "",
            }}
            onSubmit={submit}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field as={Input} id="email" name="email" type="email" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email">Имя</FormLabel>
                    <Field as={Input} id="name" name="name" type="text" />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Пароль</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      validate={(value) => {
                        let error;

                        if (value.length < 5) {
                          error = "Password must contain at least 6 characters";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="purple" width="full">
                    Регистрация
                  </Button>
                  <div className="auth__bottom">
                    <div>Есть аккаунт?</div>
                    <Link to="/login">
                      <Button colorScheme="gray" width="full">
                        Войти
                      </Button>
                    </Link>
                  </div>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </div>
  );
};

export default Register;
