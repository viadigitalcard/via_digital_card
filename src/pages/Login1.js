import React, { useState } from 'react';
import {
  Box,
  VStack,
  Input,
  Text,
  HStack,
  Link,
  Flex,
  Center,
  SimpleGrid,
  Button,
  Image,
  Tabs,
  TabPanels,
  FormControl,
  FormLabel,
  FormErrorMessage,
  TabPanel,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import jwt from 'jsonwebtoken';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/reducers/currentUserSlice';

export default function Login() {
  const [cookies, setCookie] = useCookies([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  const initialValues = {
    email: '',
    pass: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Enter Valid Email').required('Required'),
    pass: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      )
      .required('Required'),
  });

  function setCookies(name, data) {
    return setCookie(name, data, {
      path: '/',
      maxAge: 3 * 24 * 60 * 60 * 1000,
      secure: true,
    });
  }
  // function getCookie() {
  //   if (cookies.token) {
  //     const currentToken = jwt.verify(cookies.token, 'This is new Secrwet');
  //     // console.log(currentToken)
  //     return currentToken;
  //   } else {
  //     return;
  //   }
  // }

  const generateToken = user => {
    return jwt.sign({ user }, 'This is new Secrwet', {
      expiresIn: 3 * 24 * 60 * 60,
    });
  };

  const reDirect = () => {
    return <Redirect to="/dashbaord" />;
  };

  async function login(values) {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: values.email,
          password: values.pass,
        }),
      });
      const data = await res.json();
      if (data.response === 'ok') {
        console.log(data.user);
        const value = generateToken(data.user);
        localStorage.setItem('token', value);
        // setCookies('token', value);
        // dispatch(loginUser(data.user));
        // reDirect();
        // history.push('/dashboard');
        // setCookies('role', data.role);
      } else if (data.response === 'not ok') {
        seterrorMessage(data.message);
      }
    } catch {}
    setLoading(false);
  }
  return (
    <SimpleGrid mt="70px" columns={{ base: 1, md: 2 }} spacing={0}>
      <VStack
        maxWidth="500px"
        ml="93px"
        direction="column"
        alignItems="normal"
        spacing="10px"
      >
        <HStack fontWeight="medium" fontSize="36px">
          <Text color="#2D2D2D">Welcome</Text>
          <Text fontSize="36px" color="#FFB401">
            back,
          </Text>
        </HStack>
        <Text fontSize="24px" color="black">
          Login to your account
        </Text>
        <Flex>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={login}
          >
            {props => (
              <Form>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        (form.errors.email && form.touched.email) ||
                        errorMessage
                      }
                    >
                      <FormLabel pt="15px">Email</FormLabel>
                      <Input
                        id="email"
                        h="50px"
                        {...field}
                        placeholder="Email"
                      />
                      <FormErrorMessage>
                        {form.errors.email || errorMessage}{' '}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="pass">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.pass && form.touched.pass}
                    >
                      <FormLabel pt="15px">Password</FormLabel>
                      <Input
                        id="pass"
                        h="50px"
                        {...field}
                        placeholder="Password"
                      />
                      <FormErrorMessage>{form.errors.pass}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Box p="10px 0 10px">
                  <Link pl="320px" fontSize="18px" color="gray">
                    Forgot Password?
                  </Link>
                </Box>
                <Button
                  type="submit"
                  isLoading={loading}
                  borderRadius="10px"
                  bg="yellow.200"
                  size="l"
                >
                  Log in
                </Button>
              </Form>
            )}
          </Formik>
        </Flex>

        <HStack p="10px" as={Center} fontSize="16px">
          <Text color="gray.300">Don’t have an account?</Text>
          <Link color="yellow.200">Register Now</Link>
        </HStack>
      </VStack>

      <VStack mt="10px">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabPanels>
            <TabPanel>
              <Image
                w={['661px']}
                h="460px"
                mr="123px"
                src={loginImage}
              ></Image>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </SimpleGrid>
  );
}
