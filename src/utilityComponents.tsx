import styled from "styled-components";
import { Theme } from "@razorpay/blade/components";

// Multiple ways to add space and do layouts. Here we are using vertical flex with gap
export const StyledForm = styled.form(
  ({ theme }: { theme: Theme }) => `
  background-color: ${theme.colors.surface.background.level2.lowContrast};
  border-radius: ${theme.border.radius.medium}px;
  padding: ${theme.spacing[7]}px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]}px;
`
);

export const FormContainer = styled.div`
  background-color: ${(props) =>
    props.theme.colors.surface.background.level1.lowContrast};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenteredBox = styled.div`
  text-align: center;
`;

export const SmallGap = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
`;
