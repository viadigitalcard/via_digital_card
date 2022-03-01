import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import { Input, FormControl, FormErrorMessage } from "@chakra-ui/react";

export default function Card({ inputData }) {
  const contentType = "application/json";
  const [data, setData] = useState({
    card_id: inputData.card_id,
    Name: inputData.Name,
    profilePhoto: inputData.profilePhoto,
    email: inputData.email,
    userName: inputData.userName,
    companyName: inputData.companyName,
    address: inputData.address,
    designation: inputData.designation,
    tagline: inputData.tagline,
    bio: inputData.bio,
    website: inputData.website,
    ytVideo: inputData.ytVideo,
    paymentLink: inputData.paymentLink,
  });

  // session && setData({ card_id: session.user.id });
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("datttaaa", data);
    const response = await fetch("/api/cards", {
      method: "PUT",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify({
        _id: inputData._id,
        card_id: data.card_id,
        Name: data.Name,
        profilePhoto: data.profilePhoto,
        email: data.email,
        userName: data.userName,
        companyName: data.companyName,
        address: data.address,
        designation: data.designation,
        tagline: data.tagline,
        bio: data.bio,
        website: data.website,
        ytVideo: data.ytVideo,
        paymentLink: data.paymentLink,
      }),
    });
    const responseData = await response.json();
    console.log(responseData);
    router.replace("/userscard");
  };

  return (
    <div>
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
                  // onChange={(e) => handleChanges(e.target.value)}
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
                  // onChange={handleSubmit}
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
          </Form>
        )}
      </Formik>
    </div>
  );
}
