import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

const steps = [
  { label: 'School 1', diploma: `diplome 1`, year: `year 1` },
  { label: 'School 2', diploma: `diplome 2`, year: `year 2` },
  { label: 'School 3', diploma: `diplome 3`, year: `year 3` },
];

function VerticalLinearStepper() {
  return (
    <Box>
      <Stepper orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>
              <h5>{step.label}</h5>
            </StepLabel>
            <StepContent>
              <Box>
                <h5>{step.diploma}</h5>
                <h5>{step.year}</h5>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
export default VerticalLinearStepper;
