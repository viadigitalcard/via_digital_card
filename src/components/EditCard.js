import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import {
  Input,
  FormControl,
  FormErrorMessage,
  useColorModeValue,
  Textarea,
  Center,
  Button,
  CloseButton,
  Flex,
  Avatar,
  useToast,
  Box,
} from "@chakra-ui/react";
import { mixed, number, object, string } from "yup";
import { useS3Upload } from "next-s3-upload";

export default function Card({ inputData }) {
  const toast = useToast();

  function Toast(title, message, status) {
    return toast({
      title: title || "",
      description: message,
      status: status,
      position: "top",
      duration: 2000,
      // isClosable: true,
    });
  }
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const [value, setValue] = useState("");

  const [profile, setProfile] = useState(null);
  // console.log(inputData);
  const [Loading, setLoading] = useState(false);
  const textColor = useColorModeValue("gray.800", "white");
  const [errorMessage, seterrorMessage] = useState("");
  const contentType = "application/json";
  const [data, setData] = useState({
    name: inputData.name,
    profilePhoto: inputData.profilePhoto,
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
  function handleChangePhoto(e) {
    setProfile(e);
    setValue(e.size);
  }

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
    let photoUrl = "";
    if (profile) {
      let { url } = await uploadToS3(profile);
      photoUrl = url;
    }
    if (photoUrl === "") {
      photoUrl = data.profilePhoto;
    }
    console.log(photoUrl);

    setLoading(true);
    const values = {
      _id: inputData._id,
      card_id: inputData.card_id,
      name: data.name,
      profilePhoto: photoUrl,
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
    if (responseData.error) {
      seterrorMessage(responseData.error);
      setLoading(false);
    } else {
      router.replace("/cards");
    }
  };

  let validationShape;

  if (profile === null) {
    validationShape = {
      normal: Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Enter Valid Email").required("Required"),
        username: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        designation: Yup.string().required("Required"),
        tagline: Yup.string().required("Required"),
        bio: Yup.string().required("Required"),
        website: Yup.string().required("Required"),
        linkedin: Yup.string().required("Required"),
        instagram: Yup.string().required("Required"),
        youtube: Yup.string().required("Required"),
        facebook: Yup.string().required("Required"),
        payment: Yup.string().required("Required"),
      }),
    };
  } else {
    validationShape = {
      normal: Yup.object().shape({
        profilePhoto: Yup.mixed()
          .notRequired()
          .test(
            "profilePhoto",
            "File size is too large, Must be less than 1MB",
            (value) => value && value <= 1024 * 1024
          )
          .notRequired(),
        name: Yup.string().required("Required"),
        email: Yup.string().email("Enter Valid Email").required("Required"),
        username: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        designation: Yup.string().required("Required"),
        tagline: Yup.string().required("Required"),
        bio: Yup.string().required("Required"),
        website: Yup.string().required("Required"),
        linkedin: Yup.string().required("Required"),
        instagram: Yup.string().required("Required"),
        youtube: Yup.string().required("Required"),
        facebook: Yup.string().required("Required"),
        payment: Yup.string().required("Required"),
      }),
    };
  }
  return (
    <div>
      <Box w="full">
        <Formik
          validationSchema={validationShape.normal}
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
              <Flex
                as={Center}
                w="full"
                px={["50px", "50px", "50px", "90px"]}
                py={["10px", "", "0px"]}
                flexDirection={["column", "column", "row"]}
              >
                <Avatar
                  w="140px"
                  ml="20px"
                  h="140px"
                  src={
                    profile
                      ? URL.createObjectURL(profile)
                      : inputData.profilePhoto
                  }
                  boxSize="100px"
                  as={Center}
                />
                <Field name="profilePhoto">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        (form.errors.profilePhoto &&
                          form.touched.profilePhoto) ||
                        errorMessage
                      }
                    >
                      <Input
                        value={field.value}
                        display="none"
                        type="hidden"
                        {...field}
                      />
                      <FileInput
                        onChange={(e) => {
                          handleChangePhoto(e);
                          form.setFieldValue("profilePhoto", e.size);
                        }}
                      />

                      <Flex
                        as={Center}
                        // justifyContent="center"
                        // alignItems="center"
                      >
                        <Button
                          w="200px"
                          ml={["0px", "0px", "20%"]}
                          onClick={openFileDialog}
                          color="white"
                          bg="#88E000"
                          mt={["10px", "", ""]}
                          fontSize={{
                            base: "12",
                            md: "13",
                            lg: "13",
                          }}
                          fontWeight="semibold"
                          fontFamily="Open Sans"
                        >
                          {profile && profile
                            ? "Change Profile Photo"
                            : "Add Profile Photo"}
                        </Button>
                        {profile && profile ? (
                          <CloseButton
                            // as={Button}
                            onClick={() => {
                              setProfile(null);
                            }}
                            variant="ghost"
                            mt="10px"
                            ml="10px"
                            size="md"
                          />
                        ) : (
                          ""
                        )}
                      </Flex>
                      <FormErrorMessage
                        fontSize={["10px", "sm", "sm"]}
                        ml={["10%", "0px", "20%"]}
                      >
                        {form.errors.profilePhoto || errorMessage}{" "}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Flex>
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
                      width="full"
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
                      width="full"
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
                      width="full"
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
                      width="full"
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
                      width="full"
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
                      width="full"
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
                      width="full"
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
                      width="full"
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
      </Box>
    </div>
  );
}
