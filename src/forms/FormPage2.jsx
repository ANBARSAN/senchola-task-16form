

// export default FormPage2;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formStage, formPage2 } from "../store/rootSlice"; // Actions
import { schema2 } from "../components/YupSchema";
import InputBox from "../components/InputBox";
import Loader from "react-loader-spinner"; // Loading Indicator
import { labels2 } from "../components/Labels";
const FormPage2 = ({ submitButtonText, previousButton }) => {
  // redux
  const dispatch = useDispatch();

  // get Redux store values for FormPage2
  // const currentStage = useSelector((state) => state.FormStage); // for previous button

  const FormPage2 = useSelector((state) => state.FormPage2);
  const {
    buildingName,
    city,
    gender,
    buildingAddress1,
    buildingAddress2,
    postcode,
  } = FormPage2;
  // form values initial state
  const [formData, setFormData] = useState({
    buildingName: buildingName || "",
    city: city || "",
    gender: gender|| "",
    buildingAddress1: buildingAddress1 || "",
    buildingAddress2: buildingAddress2 || "",
    postcode: postcode || "",
  });

  //Error Objects state
  const [errorObject, setErrorObject] = useState("");

  //form validation and Error node updation
  const validateSchema = async (values) => {
    const validationResult = await schema2
      .validate(values, { abortEarly: false })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((err) => {
        setErrorObject(err.errors);
      });
  };
  // handling Submit
  const handleSubmit = (e) => {
    setErrorObject("");
    e.preventDefault(); // stop form in-built submission
    validateSchema(formData); // check errors with yup schema build
  };

  // form values onchange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //Dispatch datas to store
  const [isSubmitted, setIsSubmitted] = useState(false); // state for sent status

  useEffect(() => {
    if (!errorObject && isSubmitted) {
      // check if any form errors

      // update Redux Slice
      dispatch(
        formStage(3) // update formStage
      );
      // Conditionally Dispatch Form1 Data
      JSON.stringify(Object.values(formData)) ===
      JSON.stringify(Object.values(FormPage2))
        ? console.log("matched")
        : dispatch(
            formPage2({
              // update FormPage1
              buildingName: formData.buildingName,
              city: formData.city,
              gender: formData.gender,
              buildingAddress1: formData.buildingAddress1,
              buildingAddress2: formData.buildingAddress2,
              postcode: formData.postcode,
            })
          );
    }
  }, [formData, isSubmitted, dispatch, errorObject]);
  //   console.log(errorObject, formData);

  // Loading Indicator
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(!isActive);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "auto",
          marginBottom: "auto",
        }}
        type="Circles"
        color="#00BBFF"
        height={100}
        width={100}
        timeout={2000}
      ></Loader>

      <form
        className={`form ${!isActive ? "dull" : ""}`}
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* Error object division */}
        

        <div className="error-object">{errorObject[0]}</div>
       
  
      
        <table>
          <tbody>
            <tr>
              <td size={70}>
                {/* map function for every input box with corresponding labels */}

                {Object.keys(formData).map(function (e, index) {
                  return (
                    <InputBox
                      key={labels2[index]}
                      label={labels2[index]}
                      type="text"
                      id={e}
                      name={e}
                      autoComplete={e}
                      aria-label={e}
                      aria-required="true"
                      value={formData[e]}
                      onChange={handleChange}
                    />

                    
                  );
                })}
                
              </td>
             
              <td size={30}>
                <aside>
                  {/* Submit button */}

                  <div className="btn-array">
                    <input
                      className="buttons"
                      type="submit"
                      value={submitButtonText || "Submit"}
                    />
                  </div>
                </aside>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default FormPage2;
