import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardFooterTrailing,
  CardHeader,
  CardHeaderLeading,
  CardHeaderTrailing,
  CardHeaderIcon,
  CardHeaderIconButton,
  TextInput,
  FileUpload
} from "@razorpay/blade/components";

function About({ fields }: { fields: { [key: string]: string } }): JSX.Element {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleReset = () => {
    setFormValues({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value
      }));
    }
  };

  const handleSaveDetails = () => {
    console.log("Form values:", formValues);
  };

  const renderFormFields = () => {
    return Object.entries(fields).map(([fieldName, fieldInfo]) => {
      const label = fieldName.replace(/_/g, " ");
      const { type, hasFileUpload } = fieldInfo;

      if (hasFileUpload) {
        return (
          <div key={fieldName}>
            <TextInput
              label={label}
              placeholder={`Enter ${label}`}
              name={fieldName}
              textAlign="left"
              type={type}
              onChange={handleInputChange}
            />
          </div>
        );
      } else {
        return (
          <TextInput
            key={fieldName}
            label={label}
            placeholder={`Enter ${label}`}
            name={fieldName}
            textAlign="left"
            type={type}
            onChange={handleInputChange}
          />
        );
      }
    });
  };

  return (
    <div>
      <Card surfaceLevel={2}>
        <CardHeader>
          <CardHeaderLeading
            prefix={<CardHeaderIcon icon={function noRefCheck() {}} />}
            subtitle="We will use this information to keep your account updated"
            title="Profile Information"
          />
          <CardHeaderTrailing
            visual={<CardHeaderIconButton icon={function noRefCheck() {}} />}
          />
        </CardHeader>
        <CardBody>{renderFormFields()}</CardBody>
        <CardFooter>
          <CardFooterTrailing
            actions={{
              primary: {
                onClick: handleSaveDetails,
                text: "Save Details"
              },
              secondary: {
                onClick: handleReset,
                text: "Reset"
              }
            }}
          />
        </CardFooter>
      </Card>
    </div>
  );
}

export default About;
