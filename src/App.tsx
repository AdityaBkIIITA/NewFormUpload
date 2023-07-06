import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BladeProvider } from "@razorpay/blade/components";
import { paymentTheme } from "@razorpay/blade/tokens";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import Form from "./Form";
import About from "./About";

function App(): JSX.Element {
  const fields = {
    Email_Id: "email",
    Full_Name: "url",
    Aadhar_Number: {
      type: "number",
      hasFileUpload: true
    },
    PAN_Number: {
      type: "number",
      hasFileUpload: true
    },
    GSTIN_Number: {
      type: "number",
      hasFileUpload: true
    }
  };

  return (
    // Change themeTokens to `bankingTheme` and colorScheme to `dark` to see the magic
    <BladeProvider themeTokens={paymentTheme} colorScheme="light">
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/about" element={<About fields={fields} />} />
        </Routes>
      </Router>
    </BladeProvider>
  );
}

export default App;
