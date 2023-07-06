import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckboxProps,
  PasswordInputProps,
  TextInputProps
} from "@razorpay/blade/components";

export function throttle(cb: (...args: any) => void, delay = 1000) {
  let shouldWait = false;
  let waitingArgs: any;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: any) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}

export const useFormValidation = () => {
  const navigate = useNavigate();
  const [passwordValidationState, setPasswordValidationState] = React.useState<
    PasswordInputProps["validationState"]
  >("none");

  const [checkboxValidationState, setCheckboxValidationState] = React.useState<
    CheckboxProps["validationState"]
  >("none");

  const [emailValidationState, setEmailValidationState] = React.useState<
    TextInputProps["validationState"]
  >("none");

  const [phoneValidationState, setPhoneValidationState] = React.useState<
    TextInputProps["validationState"]
  >("none");

  const [isLoading, setIsLoading] = React.useState(false);

  const onPasswordChange = throttle((e) => {
    if (e.value.length <= 8) {
      setPasswordValidationState("error");
    } else {
      setPasswordValidationState("none");
    }
  }, 1000);

  const onEmailChange = throttle((e) => {
    // Do use better regex depending on the usecase. This one covers only basic email validations
    // eslint-disable-next-line
    const EMAIL_VALIDATION_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const email = e.value;
    if (EMAIL_VALIDATION_REGEX.test(email) === false) {
      setEmailValidationState("error");
      return;
    } else {
      setEmailValidationState("none");
    }
  }, 1000);

  const onPhoneChange = throttle((e) => {
    const phone = e.value;
    if (phone !== 10) {
      setPhoneValidationState("error");
      return;
    } else {
      setPhoneValidationState("none");
    }
  }, 1000);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    navigate("/about");
  };

  return {
    passwordValidationState,
    emailValidationState,
    phoneValidationState,
    checkboxValidationState,
    onPasswordChange,
    onEmailChange,
    onPhoneChange,
    onFormSubmit,
    isLoading
  };
};
