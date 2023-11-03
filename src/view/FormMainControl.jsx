//Impoting Dependencies
import React from "react";
import { useSelector } from "react-redux"; // Get Data from store
import LazyLoad from "react-lazyload"; // use lazyload for components and image
import "../assets/scss/index.scss";
//Importing Local Dependencies
import Page1Container from "./Page1Container";
import Page2Container from "./Page2Container";
import Page3Container from "./Page3Container";
import Page4Container from "./Page4Container";

const FormMainControl = () => {
  //Get state i.e. Page stage from redux
  const pageStage = useSelector((state) => state.FormStage);
  return (
    <>
      {/* Step 1 - container */}
      {pageStage === 1 && (
        <LazyLoad once>
          <Page1Container />
        </LazyLoad>
      )}
      {/* Step 2 - container */}
      {pageStage === 2 && (
        <LazyLoad once>
          <Page2Container />
        </LazyLoad>
      )}
      {/* Step 3 - container */}
      {pageStage === 3 && (
        <LazyLoad once>
          <Page3Container />
        </LazyLoad>
      )}
      {/* Step 4 -success page container */}
      {pageStage === 4 && (
        <LazyLoad once>
          <Page4Container />
        </LazyLoad>
      )}
    </>
  );
};
export default FormMainControl;
