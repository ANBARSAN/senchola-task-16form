// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { formStage, formPage1 } from "../store/rootSlice";
// import { schema1 } from "../components/YupSchema";
// import InputBox from "../components/InputBox";
// import { labels1 } from "../components/Labels";
// const FormPage1 = ({ submitButtonText, previousButton }) => {
//   // redux
//   const dispatch = useDispatch();

//   // get Redux store values for Step1
//   // const currentStage = useSelector((state) => state.FormStage); // for previous button
//   const { name, email, mobileNo, homeAddress1, homeAddress2, homeAddress3 } =
//     useSelector((state) => state?.FormPage1);

//   // form values initial state
//   const [formData, setFormData] = useState({
//     name: name || "",
//     email: email || "",
//     mobileNo: mobileNo || "",
//     homeAddress1: homeAddress1 || "",
//     homeAddress2: homeAddress2 || "",
//     homeAddress3: homeAddress3 || "",
//   });

//   //Error Objects state
//   const [errorObject, setErrorObject] = useState("");

//   //form validation and Error node updation
//   const validateSchema = async (values) => {
//     const validationResult = await schema1
//       .validate(values, { abortEarly: false })
//       .then(() => {
//         setIsSubmitted(true);
//       })
//       .catch((err) => {
//         setErrorObject(err.errors);
//       });
//   };

//   // handling Submit
//   const handleSubmit = (e) => {
//     setErrorObject("");
//     e.preventDefault(); // stop form in-built submission
//     validateSchema(formData); // check errors with yup schema build
//   };

//   // form values onchange
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   //Dispatch datas to store
//   const [isSubmitted, setIsSubmitted] = useState(false); // state for sent status
//   useEffect(() => {
//     if (!errorObject && isSubmitted) {
//       // check if any form errors
//       // update Redux Slice
//       dispatch(
//         formStage(2) // update formStage
//       );
//       dispatch(
//         formPage1({
//           // update FormPage1
//           name: formData.name,
//           email: formData.email,
//           mobileNo: formData.mobileNo,
//           homeAddress1: formData.homeAddress1,
//           homeAddress2: formData.homeAddress2,
//           homeAddress3: formData.homeAddress3,
//         })
//       );
//     }
//   }, [formData, isSubmitted, dispatch, errorObject]);

//   return (
//     <>
//       <form className="form" onSubmit={(e) => handleSubmit(e)}>
//         <div className="error-object">{errorObject[0]}</div>
//         <article>
//           <table>
//             <tbody>
//               <tr>
//                 <td size={75}>
//                   {Object.keys(formData).map(function (e, index) {
//                     return (
//                       <InputBox
//                         key={labels1[index]}
//                         label={labels1[index]}
//                         type="text"
//                         id={e}
//                         name={e}
//                         autoComplete={e}
//                         aria-label={e}
//                         aria-required="true"
//                         value={formData[e]}
//                         onChange={handleChange}
//                       />
//                     );
//                   })}
//                 </td>
//                 <td size={25}>
//                   <aside>
//                     <div className="btn-array">
//                       <input
//                         className="buttons"
//                         type="submit"
//                         value={submitButtonText || "Submit"}
//                       />
//                     </div>
//                   </aside>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </article>
//       </form>
//     </>
//   );
// };

// export default FormPage1;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formStage, formPage1 } from "../store/rootSlice";
import { schema1 } from "../components/YupSchema";
import InputBox from "../components/InputBox";
import { labels1 } from "../components/Labels";
import Loader from "react-loader-spinner"; // Loading Indicator
const FormPage1 = ({ submitButtonText, previousButton }) => {
  // redux
  const dispatch = useDispatch();

  // get Redux store values for Step1
  // const currentStage = useSelector((state) => state.FormStage); // for previous button
  const FormPage1 = useSelector((state) => state?.FormPage1);
  const { name, email, mobileNo, homeAddress1, homeAddress2, homeAddress3 } =
    FormPage1;
  // form values initial state
  const [formData, setFormData] = useState({
    name: name || "",
    email: email || "",
    mobileNo: mobileNo || "",
    homeAddress1: homeAddress1 || "",
    homeAddress2: homeAddress2 || "",
    homeAddress3: homeAddress3 || "",
  });

  //Error Objects state
  const [errorObject, setErrorObject] = useState("");

  //form validation and Error node updation
  const validateSchema = async (values) => {
    const validationResult = await schema1
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
        formStage(2) // update formStage
      );

      // Conditionally Dispatch Form1 Data
      JSON.stringify(Object.values(formData)) ===
      JSON.stringify(Object.values(FormPage1))
        ? console.log("matched")
        : dispatch(
            formPage1({
              // update FormPage1
              name: formData.name,
              email: formData.email,
              mobileNo: formData.mobileNo,
              homeAddress1: formData.homeAddress1,
              homeAddress2: formData.homeAddress2,
              homeAddress3: formData.homeAddress3,
            })
          );
    }
  }, [formData, isSubmitted, dispatch, errorObject]);
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
        <article>
          <table>
            <tbody>
              <tr>
                <td size={70}>
                  {/* map function for 6 input boxes with corresponding labels */}

                  {Object.keys(formData).map(function (e, index) {
                    return (
                      <InputBox
                        key={labels1[index]}
                        label={labels1[index]}
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
                 
                    {/* Submit button */}
                    <div className="btn-array">
                      <input
                        className="buttons"
                        type="submit"
                        value={submitButtonText || "Submit"}
                      />
                    </div>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </form>
    </>
  );
};

export default FormPage1;
