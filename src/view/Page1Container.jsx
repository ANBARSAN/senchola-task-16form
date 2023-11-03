//Importing dependencies
import React from "react";
import RenderHeader from "../components/RenderHeader";
import RenderNavTitle from "../components/RenderNavTitle";
import RenderStepNavigation from "../components/RenderStepNavigation";
import FormPage1 from "../forms/FormPage1";
import LazyLoad from "react-lazyload";

const Page1Container = () => {
  return (
    <React.Fragment>
      <RenderHeader headerTitle={"Personal Info Page"} />

      <main>
        <RenderNavTitle navTitle={"Personal Info"} navIconTitle={"USER"} />

        <RenderStepNavigation />

        <section>
          <div className="page-wrapper">
            <div className="form-container">
              <LazyLoad once>
                <FormPage1
                  submitButtonText={"Next"} // submit next button display text
                  previousButton={false} // show/hide previous button
                />
              </LazyLoad>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};
export default Page1Container;
