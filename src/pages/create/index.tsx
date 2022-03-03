import React, { useState } from "react";
import { object, string } from "yup";
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
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
import { Field, Form, Formik, FormikConfig, FormikValues } from "formik";

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
  const { data: session, status } = useSession();
  const router = useRouter();
  const contentType = "application/json";
  async function handleSubmit(values) {
    const data = {
      card_id: session.user.id,
      name: values.name,
      email: values.email,
      username: values.username,
      address: values.address,
      designation: values.designation,
      tagline: values.tagline,
      bio: values.bio,
      website: values.website,
      socialLinks: {
        instagram: values.instagram,
        facebook: values.facebook,
        linkedin: values.linkedin,
        youtube: values.youtube,
      },
      payment: values.payment,
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
    console.log(responseData);
    router.replace("/userscard");
    console.log(values);
  }
  const [errorMessage, seterrorMessage] = useState("");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <>
      <DarkModeSwitch />
      <HStack h="100vh" bg={["white", "white", "#77C208"]}>
        <Image
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
          h="full"
          w="40%"
          as={Flex}
          justifyContent="end"
          flexDirection="column"
        >
          <Box
            h="full"
            as={Flex}
            flexDirection="column"
            justifyContent="flex-end"
          >
            <Image
              h="95%"
              minHeight="90%"
              src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643548927/digital%20card/form/Profile/Saly-14_tzdjim.svg"
            />
          </Box>
        </Box>
        <Box zIndex="1" h="100%" as={Center} w={["100%", "100%", "60%"]}>
          <Box as={Center} w="70vh" h="90vh">
            <Box
              as={Flex}
              flexDirection="column"
              justifyContent="space-evenly"
              p="10px"
              w="full"
              h="inherit"
              bg="white"
              boxShadow="8px 8px 24px 0px rgba(0, 0, 0, 0.1)"
              borderRadius="36px"
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
                  fontSize={{ base: "30px", md: "34px", lg: "38px" }}
                  fontFamily="mono"
                  fontStyle="normal"
                  textAlign="center"
                  p="6% 0% 6% 0%"
                >
                  Via Digital Card
                </Text>
                <div>
                  <FormikStepper
                    initialValues={{
                      name: "",
                      email: "",
                      username: "",
                      address: "",
                      designation: "",
                      tagline: "",
                      bio: "",
                      website: "",
                      linkedin: "",
                      instagram: "",
                      youtube: "",
                      facebook: "",
                      payment: "",
                    }}
                    onSubmit={handleSubmit}
                  >
                    <FormikStep
                      label="Personal Data"
                      validationSchema={object({
                        name: string().required("Required"),
                        email: string().required("Required"),
                        username: string().required("Required"),
                      })}
                    >
                      <VStack spacing="20px" py="10">
                        <Flex
                          as={Center}
                          justifyContent="space-around"
                          w="full"
                          px="60px"
                          py={["10px", "", "0px"]}
                          flexDirection={["column", "column", "row"]}
                        >
                          <Avatar
                            w="140px"
                            h="140px"
                            src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643392997/digital%20card/form/Mask_Group_2_atdo50.svg"
                            boxSize="100px"
                            as={Center}
                          />
                          <Button
                            color="white"
                            bg="#88E000"
                            mt={["10px", "", ""]}
                            fontSize={{ base: "12", md: "16", lg: "18" }}
                            fontWeight="semibold"
                            fontFamily="Open Sans"
                          >
                            Add Profile Photo
                          </Button>
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
                        address: string().required("Required"),
                        designation: string().required("Required"),
                        tagline: string().required("Required"),
                        bio: string().required("Required"),
                      })}
                    >
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
                            isInvalid={
                              (form.errors.designation &&
                                form.touched.designation) ||
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
                            isInvalid={
                              (form.errors.bio && form.touched.bio) ||
                              errorMessage
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
                    </FormikStep>
                    <FormikStep
                      label="More Info"
                      validationSchema={object({
                        website: string().required("Required"),
                        linkedin: string().required("Required"),
                        instagram: string().required("Required"),
                        youtube: string().required("Required"),
                        facebook: string().required("Required"),
                        payment: string().required("Required"),
                      })}
                    >
                      <VStack spacing="20px" py={10}>
                        <Field name="website">
                          {({ field, form }) => (
                            <FormControl
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
                              isInvalid={
                                (form.errors.linkedin &&
                                  form.touched.linkedin) ||
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
                              isInvalid={
                                (form.errors.instagram &&
                                  form.touched.instagram) ||
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
                              isInvalid={
                                (form.errors.facebook &&
                                  form.touched.facebook) ||
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

          // the next line was not covered in the youtube video
          //
          // If you have multiple fields on the same step
          // we will see they show the validation error all at the same time after the first step!
          //
          // If you want to keep that behaviour, then, comment the next line :)
          // If you want the second/third/fourth/etc steps with the same behaviour
          //    as the first step regarding validation errors, then the next line is for you! =)
          //
          // In the example of the video, it doesn't make any difference, because we only
          //    have one field with validation in the second step :)
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
            activeStep={step}
            labelOrientation="vertical"
          >
            {steps.map(({ label }) => (
              <Step label={label} key={label}>
                {/* {label} */}
              </Step>
            ))}
          </Steps>
          {/* <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}

          {currentChild}

          <Center>
            {step > 0 ? (
              <Button
                disabled={isSubmitting}
                // variant="contained"
                w="80px"
                // color="primary"
                mr="20"
                mt="8"
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </Button>
            ) : null}
            <Button
              type="submit"
              fontSize="20px"
              mt="8"
              w={["300px", "300px", "80px"]}
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
