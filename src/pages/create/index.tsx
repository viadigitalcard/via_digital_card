import React, { useEffect, useState } from "react";
import { boolean, mixed, object, string } from "yup";
import { Step, Steps } from "chakra-ui-steps";
import {
  VStack,
  Flex,
  Box,
  Avatar,
  Text,
  Input,
  HStack,
  Image,
  Center,
  Button,
  Stack,
  FormControl,
  FormErrorMessage,
  Textarea,
  useColorModeValue,
  CloseButton,
  useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
import { Field, Form, Formik, FormikConfig, FormikValues } from "formik";
import { useS3Upload } from "next-s3-upload";
import Head from "next/head";

const steps = [
  {
    label: "Profile",
  },
  {
    label: "About",
  },
  {
    label: "Links",
  },
];

function Card() {
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const [profile, setProfile] = useState(null);
  const [errorMessage, seterrorMessage] = useState("");
  const [value, setValue] = useState("");
  const textColor = useColorModeValue("gray.800", "white");
  const color = useColorModeValue("white", "#302E2E");
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
  const router = useRouter();

  const contentType = "application/json";
  async function handleSubmit(values) {
    let uploadProfile;
    profile ? (uploadProfile = profile) : (uploadProfile = null);
    var photoURL;
    if (profile != null) {
      const { url } = await uploadToS3(uploadProfile);
      photoURL = url;
    }

    console.log("sdfsdfsd", photoURL);

    // if (!photoURL) {
    //   Toast("Error", "Error uploading profile picture", "error");
    //   return;
    // }
    // if (photoURL == "") {
    //   Toast("Error", "Error uploading profile picture", "error");
    // }
    const data = {
      name: values.name,
      profilePhoto: photoURL ? photoURL : values.profilePhoto,
      email: values.email,
      username: values.username,
      pnumber: values.pnumber,
      snumber: values.snumber,
      address: values.address,
      designation: values.designation,
      tagline: values.tagline,
      bio: values.bio,
      website: values.website || "",
      socialLinks: {
        whatsapp: values.whatsapp || "",
        twitter: values.twitter || "",
        instagram: values.instagram || "",
        facebook: values.facebook || "",
        linkedin: values.linkedin || "",
        youtube: values.youtube || "",
      },
      payment: values.payment || "",
      views: 0,
    };
    console.log(data);

    const response = await fetch("/api/cards", {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (responseData.error) {
      Toast("Error", responseData.error, "error");
      return;
    } else if (responseData.success) {
      Toast("Success", "Card created successfully", "success");
      router.push("/cards");
    }
  }
  function handleChange(e) {
    setProfile(e);
    setValue(e.size);
  }
  let validationShape;

  if (profile === null) {
    validationShape = {
      normal: Yup.object().shape({
        name: Yup.string()
          .required("Required")
          .min(3, "Must be minimum 3 characters")
          .max(15, "Must be maximum 15 characters"),
        email: Yup.string().email("Invalid Email").required("Required"),
        username: Yup.string().required("Required"),
      }),
    };
  } else {
    validationShape = {
      normal: Yup.object().shape({
        profilePhoto: mixed()
          .notRequired()
          .test(
            "profilePhoto",
            "File size is too large, Must be less than 1MB",
            (value) => value && value <= 1024 * 1024
          )
          .notRequired(),
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid Email").required("Required"),
        username: Yup.string().required("Required"),
      }),
    };
  }
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <>
      <Head>
        <title> Create Digital Card </title>
      </Head>
      {/* <DarkModeSwitch /> */}
      <HStack
        spacing="0"
        color={textColor}
        h="100vh"
        bg={["white", "white", "#77C208"]}
      >
        <Image
          alt=""
          className="background"
          display={["none", "none", "flex"]}
          pl="100px"
          h="100vh"
          pos="absolute"
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643549357/digital%20card/form/Profile/Group_17_wu2yen.svg"
        />
        <Box
          display={["none", "none", "flex"]}
          pos="relative"
          h={["0px", "0px", "full"]}
          w={["0px", "0px", "40%"]}
          as={Flex}
          justifyContent="end"
          flexDirection="column"
        >
          <Box
            display={["none", "none", "flex"]}
            h="full"
            as={Flex}
            flexDirection="column"
            justifyContent="flex-end"
          >
            <Image
              display={["none", "none", "flex"]}
              alt=""
              h="95%"
              minHeight="90%"
              src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643548927/digital%20card/form/Profile/Saly-14_tzdjim.svg"
            />
          </Box>
        </Box>
        <Box zIndex={1} h="100vh" as={Center} w={["100%", "100%", "60%"]}>
          <Box
            as={Center}
            w={["100%", "100%", "70vh"]}
            h={["100%", "100%", "90vh"]}
          >
            <Box
              as={Flex}
              flexDirection="column"
              justifyContent="space-evenly"
              p={["0px", "0px", "10px"]}
              w="full"
              h="full"
              bg={color}
              boxShadow="8px 8px 24px 0px rgba(0, 0, 0, 0.1)"
              borderRadius={["0px", "0px", "36px"]}
            >
              <Box
                css={{
                  "&::-webkit-scrollbar": {
                    overflow: "hidden",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-track": {
                    borderRadius: "10px",
                    backgroundColor: "white",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    borderRadius: "10px",
                    backgroundColor: "#77C208",
                  },
                }}
                w="100%"
                h="full"
                overflow="auto"
              >
                <Text
                  fontSize={{ base: "36px", md: "36px", lg: "38px" }}
                  fontFamily="mono"
                  fontStyle=""
                  textAlign="center"
                  p="6% 0% 6% 0%"
                >
                  Via Digital Card
                </Text>
                <div>
                  <FormikStepper
                    initialValues={{
                      profilePhoto: "",
                      name: "",
                      email: "",
                      username: "",
                      pnumber: "",
                      snumber: "",
                      address: "",
                      designation: "",
                      tagline: "",
                      bio: "",
                      whatsapp: "",
                      // website: "",
                      // instagram: "",
                      // facebook: "",
                      // linkedin: "",
                      // youtube: "",
                      // payment: "",

                      // payment: "",
                    }}
                    onSubmit={handleSubmit}
                  >
                    <FormikStep
                      label="Personal Data"
                      validationSchema={validationShape.normal}
                    >
                      <VStack spacing="20px" py="10">
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
                            src={profile ? URL.createObjectURL(profile) : ""}
                            // src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643392997/digital%20card/form/Mask_Group_2_atdo50.svg"
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
                                  accept="image/x-png,image/jpg,image/jpeg"
                                  onChange={(e) => {
                                    handleChange(e);
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
                        <Stack
                          as={Center}
                          w="full"
                          spacing="20px"
                          px={["20px", "60px", "80px"]}
                        >
                          <Field name="name">
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  (form.errors.name && form.touched.name) ||
                                  errorMessage
                                }
                              >
                                <Input
                                  h="60px"
                                  placeholder="Enter Name"
                                  marginTop={15}
                                  size="lg"
                                  variant="outline"
                                  focusBorderColor="#88E000"
                                  // color={textColor}
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
                                isInvalid={
                                  (form.errors.email && form.touched.email) ||
                                  errorMessage
                                }
                              >
                                <Input
                                  h="60px"
                                  placeholder="Enter Email"
                                  marginTop={15}
                                  size="lg"
                                  variant="outline"
                                  focusBorderColor="#88E000"
                                  // color={textColor}
                                  {...field}
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
                                isInvalid={
                                  (form.errors.username &&
                                    form.touched.username) ||
                                  errorMessage
                                }
                              >
                                <Input
                                  h="60px"
                                  placeholder="Enter username"
                                  marginTop={15}
                                  size="lg"
                                  variant="outline"
                                  focusBorderColor="#88E000"
                                  // color={textColor}
                                  {...field}
                                />
                                <FormErrorMessage>
                                  {form.errors.username || errorMessage}{" "}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Stack>
                      </VStack>
                    </FormikStep>
                    <FormikStep
                      label="Bank Accounts"
                      validationSchema={object({
                        pnumber: string()
                          .min(10, "Must be Valid Phone Number")
                          .max(10, "Must be Valid Phone Number")
                          .required("Required"),
                        snumber: string()
                          .min(10, "Must be Valid Phone Number")
                          .max(10, "Must be Valid Phone Number")
                          .required("Required"),
                        address: string().required("Required"),
                        designation: string().required("Required"),
                        tagline: string().required("Required"),
                        bio: string().required("Required"),
                        whatsapp: string()
                          .min(10, "Must be Valid Phone Number")
                          .max(10, "Must be Valid Phone Number")
                          .required("Required"),
                      })}
                    >
                      <VStack px="10%" py="10%" spacing="25px">
                        <Field name="pnumber">
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                (form.errors.pnumber && form.touched.pnumber) ||
                                errorMessage
                              }
                            >
                              <Input
                                type="number"
                                placeholder="Primary Phone Number"
                                marginTop={15}
                                size="lg"
                                h="60px"
                                variant="outline"
                                focusBorderColor="#88E000"
                                color={textColor}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.pnumber || errorMessage}{" "}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name="snumber">
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                (form.errors.snumber && form.touched.snumber) ||
                                errorMessage
                              }
                            >
                              <Input
                                type="number"
                                placeholder="Secondary Phone Number"
                                marginTop={15}
                                size="lg"
                                h="60px"
                                variant="outline"
                                focusBorderColor="#88E000"
                                color={textColor}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.snumber || errorMessage}{" "}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name="address">
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                (form.errors.address && form.touched.address) ||
                                errorMessage
                              }
                            >
                              <Textarea
                                placeholder="Address"
                                mt="10px"
                                size="lg"
                                variant="outline"
                                focusBorderColor="#88E000"
                                borderColor="#88E000"
                                border="1px"
                                resize="none"
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
                                (form.errors.designation &&
                                  form.touched.designation) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Designation"
                                marginTop={15}
                                size="lg"
                                h="60px"
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
                                (form.errors.tagline && form.touched.tagline) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Tagline"
                                marginTop={15}
                                size="lg"
                                h="60px"
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
                                (form.errors.bio && form.touched.bio) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Bio"
                                marginTop={15}
                                size="lg"
                                h="60px"
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
                        <Field name="whatsapp">
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                (form.errors.whatsapp &&
                                  form.touched.whatsapp) ||
                                errorMessage
                              }
                            >
                              <Input
                                type="number"
                                placeholder="whatsapp"
                                marginTop={15}
                                size="lg"
                                h="60px"
                                variant="outline"
                                focusBorderColor="#88E000"
                                color={textColor}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.whatsapp || errorMessage}{" "}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </VStack>
                    </FormikStep>
                    <FormikStep label="More Info">
                      <VStack spacing="20px" px="10%" py="30px">
                        <Field name="website">
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                (form.errors.website && form.touched.website) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Link"
                                marginTop={15}
                                size="lg"
                                h="60px"
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

                        <Field name="twitter">
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                (form.errors.twitter && form.touched.twitter) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Link"
                                marginTop={15}
                                size="lg"
                                h="60px"
                                variant="outline"
                                focusBorderColor="#88E000"
                                color={textColor}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.twitter || errorMessage}{" "}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name="linkedin">
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                (form.errors.linkedin &&
                                  form.touched.linkedin) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Link"
                                marginTop={15}
                                size="lg"
                                h="60px"
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
                              isInvalid={
                                (form.errors.instagram &&
                                  form.touched.instagram) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Link"
                                marginTop={15}
                                size="lg"
                                h="60px"
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
                              isInvalid={
                                (form.errors.youtube && form.touched.youtube) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Link"
                                marginTop={15}
                                size="lg"
                                h="60px"
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
                              isInvalid={
                                (form.errors.facebook &&
                                  form.touched.facebook) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Link"
                                marginTop={15}
                                size="lg"
                                h="60px"
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
                      </VStack>
                    </FormikStep>
                  </FormikStepper>
                </div>

                {/* </Box> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </HStack>
    </>
  );
}
export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Steps
            p="20px 30px 0 30px"
            responsive={false}
            maxH="70px"
            as={Box}
            color="white"
            colorScheme="brand"
            activeStep={step}
            labelOrientation="vertical"
          >
            {steps.map(({ label }) => (
              <Step label={label} key={label}>
                {/* {label} */}
              </Step>
            ))}
          </Steps>
          {currentChild}
          <Center as={Flex} justifyContent="space-evenly">
            {step > 0 ? (
              <Button
                disabled={isSubmitting}
                // variant="contained"
                h="50px"
                w="130px"
                // color="primary"

                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </Button>
            ) : (
              ""
            )}
            <Button
              disabled={isSubmitting}
              type="submit"
              fontSize="20px"
              w="130px"
              h="50px"
              // w={["300px", "300px", "80px"]}
            >
              {isSubmitting ? "Submitting" : isLastStep() ? "Submit" : "Next"}
            </Button>
          </Center>
        </Form>
      )}
    </Formik>
  );
}

export default Card;
