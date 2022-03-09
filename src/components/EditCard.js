import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import {
  Input,
  FormControl,
  FormErrorMessage,
  useColorModeValue,
  Textarea,
  Center,
  Button,
} from "@chakra-ui/react";
import { mixed, number, object, string } from "yup";

export default function Card({ inputData }) {
  console.log(inputData);
  const [Loading, setLoading] = useState(false);
  const textColor = useColorModeValue("gray.800", "white");
  const [errorMessage, seterrorMessage] = useState("");
  const contentType = "application/json";
  const [data, setData] = useState({
    name: inputData.name,
    email: inputData.email,
    username: inputData.username,
    address: inputData.address,
    designation: inputData.designation,
    tagline: inputData.tagline,
    bio: inputData.bio,
    website: inputData.website,
    linkedin: inputData.socialLinks.linkedin,
    instagram: inputData.socialLinks.instagram,
    youtube: inputData.socialLinks.youtube,
    facebook: inputData.socialLinks.facebook,
    payment: inputData.payment,
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setData({
      ...data,
      [name]: value,
    });
  };
  const router = useRouter();
  //handle submit
  const handleSubmit = async () => {
    setLoading(true);
    const values = {
      _id: inputData._id,
      card_id: inputData.card_id,
      name: data.name,
      email: data.email,
      username: data.username,
      address: data.address,
      designation: data.designation,
      tagline: data.tagline,
      bio: data.bio,
      website: data.website,
      socialLinks: {
        instagram: data.instagram,
        facebook: data.facebook,
        linkedin: data.linkedin,
        youtube: data.youtube,
      },
      payment: data.payment,
    };
    console.log("datttaaa", values);

    const response = await fetch("/api/cards", {
      method: "PUT",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(values),
    });
    const responseData = await response.json();
    console.log(responseData);
    setLoading(false);
    router.replace("/userscard");
  };

  return (
    <div>
      <Formik
        validationSchema={object({
          name: string().required("Required"),
          email: string().email("Enter Valid Email").required("Required"),
          username: string().required("Required"),
          address: string().required("Required"),
          designation: string().required("Required"),
          tagline: string().required("Required"),
          bio: string().required("Required"),
          website: string().required("Required"),
          linkedin: string().required("Required"),
          instagram: string().required("Required"),
          youtube: string().required("Required"),
          facebook: string().required("Required"),
          payment: string().required("Required"),
        })}
        initialValues={{
          name: inputData.name,
          email: inputData.email,
          username: inputData.username,
          address: inputData.address,
          designation: inputData.designation,
          tagline: inputData.tagline,
          bio: inputData.bio,
          website: inputData.website,
          linkedin: inputData.socialLinks.linkedin,
          instagram: inputData.socialLinks.instagram,
          youtube: inputData.socialLinks.youtube,
          facebook: inputData.socialLinks.facebook,
          payment: inputData.payment,
        }}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
                  isInvalid={
                    (form.errors.username && form.touched.username) ||
                    errorMessage
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
            <Field name="address">
              {({ field, form }) => (
                <FormControl
                  onChange={(e) => handleChange(e)}
                  isInvalid={
                    (form.errors.address && form.touched.address) ||
                    errorMessage
                  }
                >
                  <Textarea
                    placeholder="Address"
                    mt="20px"
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
                  onChange={(e) => handleChange(e)}
                  isInvalid={
                    (form.errors.designation && form.touched.designation) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="Designation"
                    width={{
                      base: "250px",
                      md: "200px",
                      lg: "300px",
                    }}
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
                  onChange={(e) => handleChange(e)}
                  isInvalid={
                    (form.errors.tagline && form.touched.tagline) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="Tagline"
                    width={{
                      base: "250px",
                      md: "200px",
                      lg: "300px",
                    }}
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
                  onChange={(e) => handleChange(e)}
                  isInvalid={
                    (form.errors.bio && form.touched.bio) || errorMessage
                  }
                >
                  <Input
                    placeholder="Bio"
                    width={{
                      base: "250px",
                      md: "200px",
                      lg: "300px",
                    }}
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
            <Field name="website">
              {({ field, form }) => (
                <FormControl
                  onChange={(e) => handleChange(e)}
                  isInvalid={
                    (form.errors.website && form.touched.website) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="website"
                    width={{
                      base: "250px",
                      md: "200px",
                      lg: "300px",
                    }}
                    marginTop={15}
                    size="lg"
                    variant="outline"
                    focusBorderColor="#88E000"
                    color={textColor}
                    {...field}
                  />
                  <FormErrorMessage>
                    {form.errors.website || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="linkedin">
              {({ field, form }) => (
                <FormControl
                  onChange={(e) => handleChange(e)}
                  isInvalid={
                    (form.errors.linkedin && form.touched.linkedin) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="linkedin"
                    marginTop={15}
                    size="lg"
                    variant="outline"
                    focusBorderColor="#88E000"
                    color={textColor}
                    {...field}
                  />
                  <FormErrorMessage>
                    {form.errors.linkedin || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="instagram">
              {({ field, form }) => (
                <FormControl
                  onChange={(e) => handleChange(e)}
                  isInvalid={
                    (form.errors.instagram && form.touched.instagram) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="instagram"
                    marginTop={15}
                    size="lg"
                    variant="outline"
                    focusBorderColor="#88E000"
                    color={textColor}
                    {...field}
                  />
                  <FormErrorMessage>
                    {form.errors.instagram || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="youtube">
              {({ field, form }) => (
                <FormControl
                  onChange={(e) => handleChange(e)}
                  isInvalid={
                    (form.errors.youtube && form.touched.youtube) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="youtube video"
                    marginTop={15}
                    size="lg"
                    variant="outline"
                    focusBorderColor="#88E000"
                    color={textColor}
                    {...field}
                  />
                  <FormErrorMessage>
                    {form.errors.youtube || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="facebook">
              {({ field, form }) => (
                <FormControl
                  onChange={(e) => handleChange(e)}
                  isInvalid={
                    (form.errors.facebook && form.touched.facebook) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="facebook"
                    marginTop={15}
                    size="lg"
                    variant="outline"
                    focusBorderColor="#88E000"
                    color={textColor}
                    {...field}
                  />
                  <FormErrorMessage>
                    {form.errors.facebook || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="payment">
              {({ field, form }) => (
                <FormControl
                  onChange={(e) => handleChange(e)}
                  isInvalid={
                    (form.errors.payment && form.touched.payment) ||
                    errorMessage
                  }
                >
                  <Input
                    placeholder="payment link"
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
                    {form.errors.payment || errorMessage}{" "}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Center>
              <Button
                type="submit"
                h={"50px"}
                fontSize="20px"
                isLoading={Loading}
                w={["300px", "300px", "380px"]}
                mt={10}
              >
                Update
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </div>
  );
}