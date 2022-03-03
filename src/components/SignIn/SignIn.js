import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import NextLink from "next/link";
import {
  Flex,
  Text,
  Image,
  Input,
  InputGroup,
  Link,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  useColorModeValue,
  Center,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { DarkModeSwitch } from "../DarkModeSwitch";

export const SignIn = () => {
  const color = useColorModeValue("white", "#302E2E");
  const textColor = useColorModeValue("gray.800", "white");
  const [show, setShow] = React.useState(false);
  const [Loading, setLoading] = useState(false);
  const showPassword = () => setShow(!show);
  const { data: session, token } = useSession();
  const router = useRouter();
  const [errorMessage, seterrorMessage] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter Valid Email").required("Required"),
    password: Yup.string()
      .matches(
        // , One Uppercase, One Lowercase, One Number and One Special Case Character
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters"
      )
      .required("Required"),
  });

  async function handleSubmit(values) {
    if (!session) {
      try {
        setLoading(true);
        const result = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });
        router.replace("/userscard");
        setLoading(false);

        if (result.error) {
          console.log(result.error);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push("/");
    }
  }
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
        <VStack as={Center} px="80px">
          <Image
            width={{ base: "150px", md: "200px", lg: "300px" }}
            p="10px"
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
          <Flex>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {(props) => (
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
                            <Button
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
              Not a member ?
            </Text>
            <NextLink href="/auth/signup" passHref>
              <Link fontWeight="bold" px={2} color={textColor}>
                Create account now
              </Link>
            </NextLink>
          </Flex>
        </VStack>
        <Flex display={["none", "none", "flex"]}>
          <Image
            w="full"
            py="10px"
            h="100vh"
            src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643225745/digital%20card/SignUp/Mask_Group_1_h4nweo.svg"
          />
        </Flex>
      </Flex>
    </>
  );
};
