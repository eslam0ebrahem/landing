import * as React from "react";
import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function HorizontalStepperWithError() {
  const isStepFailed = (step) => {
    return step === 1;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={1}>
        {steps.map((label, index) => {
          const labelProps = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Alert message
              </Typography>
            );

            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
