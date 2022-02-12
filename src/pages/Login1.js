import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import {
  Flex,
  Text,
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  useColorModeValue,
  Link,
  FormLabel,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";


export default function login1() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const color = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const [errorMessage, seterrorMessage] = useState("");
  const initialValues = {
    email: "",
    pass: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter Valid Email").required("Required"),
    pass: Yup.string()
      .matches(
        /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Required"),
  });

  async function login(values) {
    console.log(values);
  }

  const { data: session } = useSession();
  const router = useRouter();
  // const { email, password } = userCredentials;

  // const login = async (e) => {
  //   e.preventDefault();
  //   // console.log(email, password);
  //   console.log(field);

  //   // if (!session) {
  //   //   try {
  //   //     const result = await signIn("credentials", {
  //   //       redirect: false,
  //   //       email: email,
  //   //       password: password,
  //   //     });

  //   //     if (!result.error) {
  //   //       router.replace("/userscard");
  //   //     }
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // } else {
  //   //   router.push("/");
  //   // }
  //   console.log(session);
  // };
  return (
    <>
      
      <HStack backgroundColor={color} width="full" h="100vh">
        <Flex
          flexDirection="column"
          width={{ base: "full", md: "70%", lg: "70%" }}
          height="full"
          justifyContent="center"
          alignItems="center"
          pl={{ base: "null", md: "null", lg: "20px" }}
        >
          <Image
            width={{ base: "150px", md: "200px", lg: "300px" }}
            marginBottom={2}
            src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643213479/digital%20card/Logo/Logo_nozzes.webp"
          />
          <Text
            fontSize={{ base: "36px", md: "40px", lg: "45px" }}
            py={5}
            fontFamily="mono"
            fontWeight="normal"
            color={textColor}
          >
            Welcome back
          </Text>
          {/* email validitaion and input */}
          <Flex>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={login}
            >
                <Form>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          (form.errors.email && form.touched.email) ||
                          errorMessage
                        }
                      >
                        <Input
                          id="email"
                          width={{ base: "300px", md: "300px", lg: "400px" }}
                          size="lg"
                          variant="outline"
                          focusBorderColor="#88E000"
                          {...field}
                          marginTop={15}
                          placeholder="Enter email address"
                          color={textColor}
                        />
                        <FormErrorMessage>
                          {form.errors.email || errorMessage}{" "}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="pass">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.pass && form.touched.pass}
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
                                id="pass"
                                h="50px"
                                {...field}
                                placeholder="Password"
                                color={textColor}
                            />
                            <InputRightElement width="4.5rem">
                                <Button  h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                          
                        <FormErrorMessage>{form.errors.pass}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Text color={textColor} marginTop={5} marginLeft={40} fontWeight="semibold">
                    Recovery password
                  </Text>
                  <Button
                    type="submit"
                    width="300px"
                    size="md"
                    marginTop={45}
                  >
                    Log in
                  </Button>
                </Form>
            </Formik>
          </Flex>

          <Flex direction="row" marginTop={35}>
            <Text fontWeight="light" color={textColor}>
              {" "}
              Not a member ?{" "}
            </Text>
            <Text fontWeight="bold" px={2} color={textColor}>
              {" "}
              Create account now{" "}
            </Text>
          </Flex>
        </Flex>
        <Box as={Flex} w="45%" p="10px" display={["none", "none", "flex"]}>
          <Image
            h="100vh"
            w="100%"
            objectFit="fill"
            src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643225745/digital%20card/SignUp/Mask_Group_1_h4nweo.svg"
          />
        </Box>
      </HStack>
      {/* <form onSubmit={handleSubmit1}>
        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={handleChange}
          name="email"
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
          name="password"
          autoComplete="password"
        />
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form> */}
    </>
  );
};