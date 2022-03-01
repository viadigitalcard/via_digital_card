import { React, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  VStack,
  Input,
  FormControl,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";

function Links() {
  const [errorMessage, seterrorMessage] = useState("");
  const textColor = useColorModeValue("gray.800", "white");
  const initialValues = {
    Website: "",
    Linkedin: "",
    Instagram: "",
    Youtube: "",
    Facebook: "",
    Payment: "",
  };

  const validationSchema = Yup.object().shape({
    Website: Yup.string().required("Required"),
    Linkedin: Yup.string().required("Required"),
    Instagram: Yup.string().required("Required"),
    Youtube: Yup.string().required("Required"),
    Facebook: Yup.string().required("Required"),
    Payment: Yup.string().required("Required"),
  });

  async function handleSubmit(values) {
    console.log(values);
  }

  return (
    <VStack spacing="20px" py={10}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <Field name="Website">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    (form.errors.Website && form.touched.Website) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="Website"
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
                    {form.errors.Website || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="Linkedin">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    (form.errors.Linkedin && form.touched.Linkedin) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="Linkedin"
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
                    {form.errors.Linkedin || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="Instagram">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    (form.errors.Instagram && form.touched.Instagram) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="Instagram"
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
                    {form.errors.Instagram || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="Youtube">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    (form.errors.Youtube && form.touched.Youtube) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="Youtube video"
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
                    {form.errors.Youtube || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="Facebook">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    (form.errors.Facebook && form.touched.Facebook) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="Facebook"
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
                    {form.errors.Facebook || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="Payment">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    (form.errors.Payment && form.touched.Payment) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="Payment link"
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
                    {form.errors.Payment || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </VStack>
  );
}

export default Links;
