import {
  Button,
  TextInput,
  Heading,
  ArrowRightIcon,
  useTheme
} from "@razorpay/blade/components";
import { useFormValidation } from "./utils";
import { FormContainer, StyledForm, SmallGap } from "./utilityComponents";

function Form(): JSX.Element {
  const { theme } = useTheme();
  const { onPhoneChange, onFormSubmit, isLoading } = useFormValidation();

  return (
    <FormContainer>
      <StyledForm theme={theme} onSubmit={onFormSubmit}>
        <Heading size="large">Welcome to KYC Update</Heading>
        <Heading variant="subheading">Enter your phone number!</Heading>
        <SmallGap />
        <TextInput
          isRequired
          label="Phone"
          name="phone"
          type="number"
          errorText="Invalid Email"
          onChange={onPhoneChange}
        />
        <SmallGap />
        <Button
          isFullWidth
          type="submit"
          icon={ArrowRightIcon}
          iconPosition="right"
          isLoading={isLoading}
        >
          Proceed
        </Button>
      </StyledForm>
    </FormContainer>
  );
}

export default Form;
