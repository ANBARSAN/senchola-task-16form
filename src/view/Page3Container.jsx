import React from "react";
import RenderHeader from "../components/RenderHeader";
import RenderNavTitle from "../components/RenderNavTitle";
import RenderStepNavigation from "../components/RenderStepNavigation";
import FormPage3 from "../forms/FormPage3";
import LazyLoad from "react-lazyload";

const Page3Container = () => {
  return (
    <React.Fragment>
      <RenderHeader headerTitle={"Confirmation Page"} />

      <main>
        <RenderNavTitle navTitle={"Confirmation Page"} navIconTitle={"ARC"} />

        <RenderStepNavigation />

        <section>
          <div className="page-wrapper">
            <div className="form-container">
              <LazyLoad once>
                <FormPage3
                  submitButtonText={"Submit"} // submit next button display text
                  previousButton={true} // show/hide previous button
                />
              </LazyLoad>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};
export default Page3Container;
