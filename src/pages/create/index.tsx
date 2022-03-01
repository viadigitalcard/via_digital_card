import React, { useState } from "react";
import { mixed, number, object, string } from "yup";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  VStack,
  Flex,
  Box,
  Heading,
  Avatar,
  Text,
  Input,
  HStack,
  Image,
  Center,
  Spacer,
  Grid,
  Button,
  Stack,
  FormControl,
  FormErrorMessage,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { InputControl } from "formik-chakra-ui";
import Profile from "../../components/Profile";
import About from "../../components/About";
import Links from "../../components/Links";
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

const image1 =
  "https://res.cloudinary.com/dbm7us31s/image/upload/v1643548927/digital%20card/form/Profile/Saly-14_tzdjim.svg";
const image2 =
  "https://res.cloudinary.com/dbm7us31s/image/upload/v1643823994/digital%20card/form/Saly-16_wvbxda.svg";
const image3 =
  "https://res.cloudinary.com/dbm7us31s/image/upload/v1643823979/digital%20card/form/Saly-15_1_zhlfjw.svg";

function Card() {
  const [errorMessage, seterrorMessage] = useState("");
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });
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
              // src={ImgSrc}
              src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643548927/digital%20card/form/Profile/Saly-14_tzdjim.svg"
            />
          </Box>
        </Box>
        <Box zIndex="1" h="100%" as={Center} w={["100%", "100%", "60%"]}>
          <Box as={Center} w="70vh" h="90vh">
            <Box
              // border="2px solid red"
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
                // border="2px solid red"
                h="full"
                overflow="auto"
              >
                <Text
                  fontSize={{ base: "30px", md: "34px", lg: "38px" }}
                  fontFamily="mono"
                  fontStyle="normal"
                  textAlign="center"
                  // mt="60%"
                  // border="2px solid red"
                  p="6% 0% 6% 0%"
                  // h="200px"
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
                      Website: "",
                      Linkedin: "",
                      Instagram: "",
                      Youtube: "",
                      Facebook: "",
                      Payment: "",
                    }}
                    onSubmit={async (values) => {
                      console.log("values", values);
                    }}
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
                        Website: string().required("Required"),
                        Linkedin: string().required("Required"),
                        Instagram: string().required("Required"),
                        Youtube: string().required("Required"),
                        Facebook: string().required("Required"),
                        Payment: string().required("Required"),
                      })}
                    >
                      <VStack spacing="20px" py={10}>
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
                                {form.errors.Website || errorMessage}{" "}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name="Linkedin">
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                (form.errors.Linkedin &&
                                  form.touched.Linkedin) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Linkedin"
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
                                (form.errors.Instagram &&
                                  form.touched.Instagram) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Instagram"
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
                                (form.errors.Facebook &&
                                  form.touched.Facebook) ||
                                errorMessage
                              }
                            >
                              <Input
                                placeholder="Facebook"
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
                color="primary"
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
