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
  useColorModeValue
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { DarkModeSwitch } from "../components/DarkModeSwitch";


export default function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const color = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue( 'gray.800','white')
  const [errorMessage, seterrorMessage] = useState('');
  const initialValues = {
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
    <Formik
    validationSchema={validationSchema}
    initialValues={initialValues}
  >
    <>
      <DarkModeSwitch />
      <HStack backgroundColor={color} width="full" h="100vh">
        <Flex
          flexDirection="column"
          width={{ base: "full", md: "70%", lg: "70%" }}
          height="full"
          justifyContent="center"
          alignItems="center"
          pl={{base:"null",md:"null",lg: "20px"}}
        >
          <Image width={{ base: "150px", md: "200px", lg: "300px"}}  marginBottom={2} src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643213479/digital%20card/Logo/Logo_nozzes.webp" /> 
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
            <Field name="email">
              {({ field, form}) => (
                <FormControl
                  isInvalid={
                    (form.errors.email && form.touched.email) || errorMessage
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
                    {...field}
                    color={textColor}
                  />
                  <FormErrorMessage>
                    {form.errors.email || errorMessage}{' '}
                  </FormErrorMessage>
                </FormControl>
               )}
              </Field>
            </Flex>
            {/* password validation & input */}
            <Flex>
              <Field name="password">
                {({ field, form}) => (
                  <FormControl
                    isInvalid={
                    (form.errors.password && form.touched.password) || errorMessage
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
                        {...field}
                        color={textColor}
                      />
                      <InputRightElement width="4.5rem">
                        <Button  h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>
                      {form.errors.password || errorMessage}{' '}
                    </FormErrorMessage>
                  </FormControl>
                    )}
              </Field>
            </Flex>
          <Text color={textColor} marginTop={5} marginLeft={40} fontWeight="semibold">
            Recovery password
          </Text>

          <Button type="submit"  marginTop={45}  size="md" width="300px">
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
        <Box  as={Flex} w="45%" p="10px"  display={["none", "none", "flex"]}  >
            <Image h="100vh" w="100%"  objectFit='fill'   src='https://res.cloudinary.com/dbm7us31s/image/upload/v1643225745/digital%20card/SignUp/Mask_Group_1_h4nweo.svg' />
        </Box> 
      </HStack>
      </>
      </Formik>
  );
}