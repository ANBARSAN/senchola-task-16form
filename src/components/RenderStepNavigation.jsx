import { formStage } from "../store/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import "../assets/scss/_progress-bar.scss"; //importing  CSS PREPROCESSOR
const RenderStepNavigation = () => {
  // Redux accessing state
  //
  const pageStage = useSelector((state) => state.FormStage);
  const form1 = useSelector((state) => state.FormPage1);
  const form2 = useSelector((state) => state.FormPage2);
  const dispatch = useDispatch();

  // Clickable circle elements - > access to jump pages
  const changePage = (e) => {
    e.preventDefault();
    const value = Number(e.target.value);
    dispatch(formStage(value));
  };

  // Navigation circles design
  // Circle - Line - Circle - Line - Circle
  return (
    <div className="progressbar">
      <div className="progress-steps">
        <div
          className={`wrapper-circle ${
            pageStage === 1 ? "wrapper-circle-active" : ""
          }`}
        >
          <input
            type="reset"
            value="1"
            onClick={(e) => changePage(e)}
            className={`progress-circle ${
              pageStage === 1 || form1 ? "progress-circle-active" : ""
            } `}
          />
        </div>
        <p className="progress-content">Step1</p>
      </div>
      <div
        className={`progress-steps progress-line ${
          pageStage === 2 || pageStage === 3 ? "progress-line-active" : ""
        } `}
      ></div>

      <div className="progress-steps">
        <div
          className={`wrapper-circle ${
            pageStage === 2 ? "wrapper-circle-active" : ""
          }`}
        >
          <input
            type="reset"
            value="2"
            onClick={(e) => changePage(e)}
            className={`progress-circle ${
              pageStage === 2 || (pageStage === 3 && form2)
                ? "progress-circle-active"
                : ""
            }`}
          />
        </div>

        <p className="progress-content">Step2</p>
      </div>
      <div
        className={`progress-steps progress-line ${
          pageStage === 3 ? "progress-line-active" : ""
        }`}
      ></div>

      <div className="progress-steps">
        <div
          className={`wrapper-circle ${
            pageStage === 3 ? "wrapper-circle-active" : ""
          }`}
        >
          <input
            type="reset"
            value="3"
            onClick={(e) => changePage(e)}
            className={`progress-circle ${
              pageStage === 3 ? "progress-circle-active" : ""
            }`}
          />
        </div>
        <p className="progress-content">Step3</p>
      </div>
    </div>
  );
};
export default RenderStepNavigation;
