import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationForm from "./Components/Pages/ApplicationForm";
import Body from "./Components/Body";
import AboutUs from "./Components/Pages/AboutUs";

const RouterURLS = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" {...props} element={<Body />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/application-form" element={<ApplicationForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterURLS;
