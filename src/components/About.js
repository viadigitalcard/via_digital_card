import { React, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Textarea,
  FormControl,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";

function About() {
  const [errorMessage, seterrorMessage] = useState("");
  const textColor = useColorModeValue("gray.800", "white");
  const initialValues = {
    name: "",
    address: "",
    designation: "",
    tagline: "",
    bio: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    designation: Yup.string().required("Required"),
    tagline: Yup.string().required("Required"),
    bio: Yup.string().required("Required"),
  });

  async function handleSubmit(values) {
    console.log(values);
  }
  return (
    <VStack mt="30px" spacing="20px">
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
                    width={{ base: "250px", md: "300px", lg: "300px" }}
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
            <Field name="address">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    (form.errors.address && form.touched.address) || errorMessage
                  }
                >
                  <Textarea
                    placeholder="Address"
                    mt="20px"
                    w="full"
                    h="60px"
                    size="lg"
                    variant="outline"
                    focusBorderColor="#88E000"
                    borderColor="#88E000"
                    border="1px"
                    borderRadius="10px"
                    {...field}
                    color={textColor}
                  />
                  <FormErrorMessage>
                    {form.errors.address || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="designation">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    (form.errors.designation && form.touched.designation) || errorMessage
                  }
                >
                  <Input
                    placeholder="Designation"
                    width={{ base: "250px", md: "200px", lg: "300px" }}
                    marginTop={15}
                    size="lg"
                    variant="outline"
                    focusBorderColor="#88E000"
                    color={textColor}
                    {...field}
                  />
                  <FormErrorMessage>
                    {form.errors.designation || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="tagline">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    (form.errors.tagline && form.touched.tagline) || errorMessage
                  }
                >
                  <Input
                    placeholder="Tagline"
                    width={{ base: "250px", md: "200px", lg: "300px" }}
                    marginTop={15}
                    size="lg"
                    variant="outline"
                    focusBorderColor="#88E000"
                    color={textColor}
                    {...field}
                  />
                  <FormErrorMessage>
                    {form.errors.tagline || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="bio">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    (form.errors.bio && form.touched.bio) || errorMessage
                  }
                >
                  <Input
                    placeholder="Bio"
                    width={{ base: "250px", md: "200px", lg: "300px" }}
                    marginTop={15}
                    size="lg"
                    variant="outline"
                    focusBorderColor="#88E000"
                    color={textColor}
                    {...field}
                  />
                  <FormErrorMessage>
                    {form.errors.bio || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
      <InputGroup
        size="lg"
        width={{ base: "250px", md: "200px", lg: "300px" }}
        marginTop={15}
        variant="outline"
      >
        <Input
          isInvalid
          pr="4.5rem"
          placeholder="Upload File"
          errorBorderColor="#88E000"
          focusBorderColor="#88E000"
        />
        <InputRightElement width="4.5rem">
          <Image src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643469851/digital%20card/icon/Group_14_obtzzl.svg" />
        </InputRightElement>
      </InputGroup>
    </VStack>
  );
}

export default About;
