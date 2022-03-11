import React, { useState } from "react";
import NextLink from "next/link";
import {
  Flex,
  Text,
  Box,
  HStack,
  Image,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  useColorModeValue,
  Center,
  Checkbox,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { DarkModeSwitch } from "../DarkModeSwitch";

export default function SignUp() {
  const logo = useColorModeValue(
    "https://res.cloudinary.com/dbm7us31s/image/upload/v1646034354/digital%20card/landing-page/logo_zt1jb4.png",
    "https://res.cloudinary.com/dbm7us31s/image/upload/v1646034356/digital%20card/landing-page/logo-dark_yijgxs.png"
  );
  const color = useColorModeValue("white", "#302E2E");
  const textColor = useColorModeValue("gray.800", "white");
  const [show, setShow] = React.useState(false);
  const showPassword = () => setShow(!show);
  const [errorMessage, seterrorMessage] = useState("");
  const [Loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    repassword: "",
    terms: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Enter Valid Email").required("Required"),
    password: Yup.string()
      .matches(
        // , One Uppercase, One Lowercase, One Number and One Special Case Character
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters"
      )
      .required("Required"),
    repassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password does not matched")
      .required("Required"),
    terms: Yup.boolean()
      .oneOf([true], "You must accept the ToS and Privacy Policy")
      .required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          firstName: values.name,
          email: values.email,
          password: values.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        console.log(res.status);
      }
      setLoading(false);
      router.replace("/auth/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <>
        <DarkModeSwitch />
        <HStack backgroundColor={color} width="full" h="100vh">
          <Box as={Flex} w="45%" display={["none", "none", "flex"]}>
            <Image
              alt=""
              h="100vh"
              w="100%"
              p="2px"
              objectFit="content"
              src="https://file-upload-via-digital.s3.ap-south-1.amazonaws.com/assets/Sign+Up+Right.png"
            />
          </Box>
          <Flex
            flexDirection="column"
            width={{ base: "full", md: "65%", lg: "65%" }}
            height="full"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              alt=""
              width={{ base: "200px", md: "200px", lg: "300px" }}
              marginBottom={2}
              src="https://file-upload-via-digital.s3.ap-south-1.amazonaws.com/assets/Logo.png"
            />
            <Text
              fontSize={{ base: "36px", md: "40px", lg: "45px" }}
              py={5}
              fontFamily="mono"
              fontWeight="normal"
              color={textColor}
              textAlign="center"
              alignSelf="center"
            >
              Sign Up
            </Text>
            {/* validation for name */}
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form>
                  <Flex>
                    <Field name="name">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            (form.errors.name && form.touched.name) ||
                            errorMessage
                          }
                        >
                          <Input
                            placeholder="Name"
                            width={{ base: "300px", md: "300px", lg: "400px" }}
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
                  </Flex>
                  {/* validation for email */}
                  <Flex>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            (form.errors.email && form.touched.email) ||
                            errorMessage
                          }
                        >
                          <Input
                            placeholder="Enter email address"
                            width={{ base: "300px", md: "300px", lg: "400px" }}
                            marginTop={15}
                            size="lg"
                            variant="outline"
                            focusBorderColor="#88E000"
                            id="email"
                            color={textColor}
                            {...field}
                          />
                          <FormErrorMessage>
                            {form.errors.email || errorMessage}{" "}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                  <Flex>
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            (form.errors.password && form.touched.password) ||
                            errorMessage
                          }
                        >
                          <InputGroup
                            size="lg"
                            width={{ base: "300px", md: "300px", lg: "400px" }}
                            marginTop={15}
                            variant="outline"
                          >
                            <Input
                              pr="4.5rem"
                              type={show ? "text" : "password"}
                              placeholder="Password"
                              focusBorderColor="#88E000"
                              id="password"
                              color={textColor}
                              {...field}
                            />
                            <InputRightElement width="4.5rem">
                              <Button
                                color={textColor}
                                h="1.75rem"
                                size="sm"
                                onClick={showPassword}
                              >
                                {show ? "Hide" : "Show"}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.password || errorMessage}{" "}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                  <Flex>
                    <Field name="repassword">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            (form.errors.repassword &&
                              form.touched.repassword) ||
                            errorMessage
                          }
                        >
                          <InputGroup
                            size="lg"
                            width={{ base: "300px", md: "300px", lg: "400px" }}
                            marginTop={15}
                            variant="outline"
                          >
                            <Input
                              pr="4.5rem"
                              type={show ? "text" : "password"}
                              placeholder="Re-enter Password"
                              focusBorderColor="#88E000"
                              id="repassword"
                              color={textColor}
                              {...field}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.repassword || errorMessage}{" "}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                  <Flex>
                    <Field name="terms">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            (form.errors.terms && form.touched.terms) ||
                            errorMessage
                          }
                        >
                          <Checkbox
                            mt={5}
                            size="md"
                            colorScheme="green"
                            {...field}
                          >
                            <Text
                              mt={5}
                              fontSize={{ base: "xs", md: "sm", lg: "md" }}
                            >
                              Creating an account means you’re okay with our{" "}
                              <br />
                              <NextLink href="/tos" passHref>
                                <Link
                                  fontWeight="bold"
                                  pr="4px"
                                  color="#0038FF"
                                >
                                  Terms of Service
                                </Link>
                              </NextLink>
                              and our
                              <NextLink href="/privacy" passHref>
                                <Link
                                  fontWeight="bold"
                                  pl="4px"
                                  color="#0038FF"
                                >
                                  Privacy Policy.
                                </Link>
                              </NextLink>
                            </Text>
                          </Checkbox>
                          <FormErrorMessage>
                            {form.errors.terms || errorMessage}{" "}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>

                  <Center>
                    <Button
                      type="submit"
                      h={"50px"}
                      fontSize="20px"
                      isLoading={Loading}
                      w={["300px", "300px", "380px"]}
                      mt={10}
                    >
                      Sign Up
                    </Button>
                  </Center>
                </Form>
              )}
            </Formik>

            <Flex direction="row" marginTop={35}>
              <Text fontWeight="light" color={textColor}>
                Already have an account ?
              </Text>
              <NextLink href="/auth/signin" passHref>
                <Link fontWeight="bold" px={2} color={textColor}>
                  Sign in
                </Link>
              </NextLink>
            </Flex>
          </Flex>
        </HStack>
      </>
    </div>
  );
}
