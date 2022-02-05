import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Formik } from "formik";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { REQUIRED_VALIDATION } from "../util/utils";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

export default function SignUp() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const color = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const [initialValue, setinitialValue] = useState(initialValues);

  const validationSchema = Yup.object({
    name: Yup.string().required(REQUIRED_VALIDATION("Name")),
    email: Yup.string().required(REQUIRED_VALIDATION("Email")),
    password: Yup.string()
      .required()
      .min(8, "Password must be min 8 char log!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    mode: "onTouched",
    defaultValues: initialValue,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (value) => {
    console.log("Value::::", value);
  };

  const onError = (error) => {
    console.log("Error::::", error);
  };

  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormControl>
        <DarkModeSwitch />
        <HStack
          backgroundColor={color}
          width={{ sm: "1px", md: "50%", lg: "100%" }}
          h="100vh"
        >
          <Box width={{ base: "hidden", md: "50%", lg: "50%" }}>
            <Image
              h="100vh"
              w="100%"
              px="70"
              objectFit="cover"
              src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643134864/digital%20card/SignUp/Mask_mg0oj2.svg"
            />
          </Box>

          <Flex
            flexDirection="column"
            width={{ base: "full", md: "50%", lg: "50%" }}
            height="full"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              width={{ base: "200px", md: "200px", lg: "300px" }}
              marginBottom={2}
              src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643213479/digital%20card/Logo/Logo_nozzes.webp"
            />
            <Text
              fontSize={{ base: "36px", md: "40px", lg: "45px" }}
              py={5}
              fontFamily="Margot"
              color={textColor}
              textAlign="center"
              alignSelf="center"
            >
              Sign Up
            </Text>

            <Input
              placeholder="Name"
              width={{ base: "200px", md: "300px", lg: "400px" }}
              marginTop={15}
              size="lg"
              variant="outline"
              focusBorderColor="#88E000"
              id="name"
              {...register("name")}
              color={textColor}
            />
            {errors && errors.name && (
              <FormHelperText color="red">
                {errors.name.message && errors.name.message}
              </FormHelperText>
            )}
            <Input
              placeholder="Enter email address"
              width={{ base: "300px", md: "300px", lg: "400px" }}
              marginTop={15}
              size="lg"
              variant="outline"
              focusBorderColor="#88E000"
              id="email"
              {...register("email")}
              color={textColor}
            />
            {errors && errors.email && (
              <FormHelperText color="red">
                {errors.email.message && errors.email.message}
              </FormHelperText>
            )}

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
                {...register("password")}
                color={textColor}
              />
              <InputRightElement width="4.5rem">
                <Button
                  color={textColor}
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors && errors.password && (
              <FormHelperText color="red">
                {errors.password.message && errors.password.message}
              </FormHelperText>
            )}
            <Text
              color={textColor}
              marginTop={5}
              marginLeft={40}
              fontWeight="semibold"
            >
              Recovery password
            </Text>

            {/* <Button type="submit"  marginTop={45}  size="md" width="300px">
            Sign In
          </Button> */}
            <Button type="submit" marginTop={45}>
              Sign In
            </Button>

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
        </HStack>
      </FormControl>
    </form>
  );
}
