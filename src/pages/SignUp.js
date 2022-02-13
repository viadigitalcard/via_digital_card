import React, { useState } from "react";
import NextLink from "next/link";
import {
  Flex,
  Text,
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  Link,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  useColorModeValue,
  Center,
  VStack,
  Container,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

export default function signup() {
  const [show, setShow] = React.useState(false);
  const [Loading, setLoading] = useState(false);
  const handleClick = () => setShow(!show);
  // const { data: session } = useSession();
  // const router = useRouter();
  const color = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const [errorMessage, seterrorMessage] = useState('');
  
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Enter Valid Email').required('Required'),
    password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters'
      // , One Uppercase, One Lowercase, One Number and One Special Case Character
    )
    .required('Required'),
  });
  
  return (
      <>
        <DarkModeSwitch />
          <Flex
            bg={color}
            as={Center}
            justifyContent="space-evenly"
            w="full"
            h="100vh"
          >
            {/* full width for screen */}
            <Flex display={["none", "none", "flex"]}>
              <Image
                w="full"
                py="10px"
                h="100vh"
                src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643134864/digital%20card/SignUp/Mask_mg0oj2.svg"
              />
            </Flex>
            
            {/* divdev into two parts */}
            <VStack as={Center} px="50px" mt="30px" >
              <Image
                width={{ base: "200px", md: "200px", lg: "300px" }}
                
                src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643213479/digital%20card/Logo/Logo_nozzes.webp"
              />
              <Text
                fontSize={{ base: "36px", md: "40px", lg: "45px" }}
                // py={5}
                fontFamily="mono"
                fontWeight="normal"
                color={textColor}
              >
                Sign Up
              </Text>
              {/* validation for name */}
              <Flex>
                <Formik
                  validationSchema={validationSchema}
                  initialValues={initialValues}
                  // onSubmit={handleSubmit}
                >
                  {(props) => (
                    <Form>
                      <Field name="name">
                        {({field, form}) => (
                          <FormControl
                            isInvalid={
                              (form.errors.email && form.touched.email) ||
                              errorMessage
                            }
                          >
                            <Input
                              placeholder="Name"
                              mt="20px"
                              id="email"
                              h={["50px", "50px", "60px"]}
                              w={["300px", "300px", "400px"]}
                              size="lg"
                              variant="outline"
                              {...field}
                              color={textColor}
                            />
                            <FormErrorMessage>
                              {form.errors.name || errorMessage}{' '}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      {/* validation for email */}
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
                                  mt="20px"
                                  id="email"
                                  h={["50px", "50px", "60px"]}
                                  w={["300px", "300px", "400px"]}
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
                                  w={["300px", "300px", "400px"]}
                                  mt="20px"
                                >
                                  <Input
                                    pr="4.5rem"
                                    type={show ? "text" : "password"}
                                    placeholder="Password"
                                    id="password"
                                    h={["50px", "50px", "60px"]}
                                    variant="outline"
                                    {...field}
                                    color={textColor}
                                  />
                                  <InputRightElement
                                    h={["50px", "50px", "60px"]}
                                    width="4.5rem"
                                  >
                                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                                      {show ? "Hide" : "Show"}
                                    </Button>
                                  </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage >
                                  {form.errors.password || errorMessage}{" "}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                      </Field>
                        <Text
                          as={Flex}
                          justifyContent="end"
                          color={textColor}
                          py="30px"
                          fontWeight="semibold"
                        >
                          Recovery password
                        </Text>

                        <Center>
                          <Button
                            type="submit"
                            h={"50px"}
                            fontSize="20px"
                            isLoading={Loading}
                            w={["300px", "300px", "380px"]}
                          >
                            Sign In
                          </Button>
                        </Center>
                    </Form>
                  )}
                </Formik>
                </Flex>
                  
                  <Flex direction="row" py="40px">
                      <Text fontWeight="light" color={textColor}>
                        Already Member ?
                      </Text>
                      <NextLink href="/auth/signin" passHref>
                        <Link fontWeight="bold" px={2} color={textColor}>
                          Login
                        </Link>
                      </NextLink>
                  </Flex>        
             </VStack>
          </Flex>
      </>
  );
};