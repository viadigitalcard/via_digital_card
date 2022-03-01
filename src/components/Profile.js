import { React, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  VStack,
  HStack,
  Stack,
  Flex,
  Box,
  Button,
  Center,
  Heading,
  Avatar,
  Text,
  Input,
  bgGradient,
  FormControl,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";

function Profile(props) {
  const [errorMessage, seterrorMessage] = useState("");
  const textColor = useColorModeValue("gray.800", "white");
  const initialValues = {
    name: "",
    email: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Enter Valid Email").required("Required"),
    username: Yup.string().required("Required"),
  });

  async function handleSubmit(values) {
    console.log(values);
  }

  return (
    <VStack spacing="20px" py="10">
      <Flex
        as={Center}
        justifyContent="space-around"
        w="full"
        px="60px"
        py={["10px", "", "0px"]}
        flexDirection={["column", "column", "row"]}
      >
        <Avatar
          w="140px"
          h="140px"
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643392997/digital%20card/form/Mask_Group_2_atdo50.svg"
          boxSize="100px"
          as={Center}
        />
        <Button
          color="white"
          bg="#88E000"
          mt={["10px", "", ""]}
          fontSize={{ base: "12", md: "16", lg: "18" }}
          fontWeight="semibold"
          fontFamily="Open Sans"
        >
          Add Profile Photo
        </Button>
      </Flex>
      <Stack
        as={Center}
        w="full"
        spacing="20px"
        px={["20px", "100px", "120px"]}
      >
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      (form.errors.name && form.touched.name) || errorMessage
                    }
                  >
                    <Input
                      placeholder="Enter Name"
                      w="full"
                      h="60px"
                      marginTop={15}
                      size="lg"
                      variant="outline"
                      focusBorderColor="#88E000"
                      color={textColor}
                      {...field}
                    />
                    <FormErrorMessage>
                      {form.errors.name || errorMessage}{" "}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      (form.errors.email && form.touched.email) || errorMessage
                    }
                  >
                    <Input
                      placeholder="Enter email address"
                      mt="20px"
                      id="email"
                      w="full"
                      h="60px"
                      size="lg"
                      variant="outline"
                      {...field}
                      color={textColor}
                    />
                    <FormErrorMessage>
                      {form.errors.email || errorMessage}{" "}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="username">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      (form.errors.username && form.touched.username) || errorMessage
                    }
                  >
                    <Input
                      placeholder="Enter Username"
                      w="full"
                      h="60px"
                      marginTop={15}
                      size="lg"
                      variant="outline"
                      focusBorderColor="#88E000"
                      color={textColor}
                      {...field}
                    />
                    <FormErrorMessage>
                      {form.errors.name || errorMessage}{" "}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </Stack>
    </VStack>
  );
}

export default Profile;
