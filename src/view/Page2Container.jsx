import React from "react";
import RenderHeader from "../components/RenderHeader";
import RenderNavTitle from "../components/RenderNavTitle";
import RenderStepNavigation from "../components/RenderStepNavigation";
import FormPage2 from "../forms/FormPage2";
import LazyLoad from "react-lazyload";

const Page2Container = ({ pageStage }) => {
  return (
    <React.Fragment>
      <RenderHeader headerTitle={"Office Info Page"} />

      <main>
        <RenderNavTitle navTitle={"Office Details"} navIconTitle={"ARC"} />

        <RenderStepNavigation />

        <section>
          <div className="page-wrapper">
            <div className="form-container">
              <LazyLoad once>
                <FormPage2
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
export default Page2Container;
