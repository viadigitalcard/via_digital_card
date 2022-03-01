import React, { useState } from "react";
import { mixed, number, object, string } from "yup";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FormikConfig,
  FormikValues,
} from "formik";
import { InputControl } from "formik-chakra-ui";
import { Box, Button, FormControl, Grid, Input } from "@chakra-ui/react";

function card() {
  return (
    <div>
      <FormikStepper
        initialValues={{
          firstName: "",
          lastName: "",
          money: 0,
          description: "",
        }}
        onSubmit={async (values) => {
          console.log("values", values);
        }}
      >
        <FormikStep
          label="Personal Data"
          validationSchema={object({
            firstName: string().required("Required"),
            lastName: string().required("Required"),
          })}
        >
          <Box paddingBottom={2}>
            <InputControl name="firstName" label="First Name" />
          </Box>
          <Box paddingBottom={2}>
            <InputControl name="lastName" label="Last Name" />
          </Box>
        </FormikStep>
        <FormikStep
          label="Bank Accounts"
          validationSchema={object({
            money: number().required("Required"),
          })}
        >
          <Box paddingBottom={2}>
            <InputControl name="money" label="Money Money" />
          </Box>
        </FormikStep>
        <FormikStep
          label="More Info"
          validationSchema={object({
            description: string().required("Required"),
          })}
        >
          <Box paddingBottom={2}>
            <InputControl name="description" label="description" />
          </Box>
        </FormikStep>
      </FormikStepper>
    </div>
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

          <Grid>
            {step > 0 ? (
              <Grid>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid>
              <Button
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? "Submitting" : isLastStep() ? "Submit" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default card;
