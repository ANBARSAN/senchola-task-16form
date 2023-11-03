// import React from "react";
// import "../assets/scss/success.scss";
// import RenderHeader from "../components/RenderHeader";
// import checkmark from "../assets/img/checkmark.png";
// import { useSelector } from "react-redux";

// const Page4Container = () => {
//   const state = useSelector((state) => state);
//   console.log(state);
//   return (
//     <>
//       <RenderHeader headerTitle={"Registration Success"} />
//       <div className="success-wrapper">
//         <div className="success-box">
//           {/* Success - GreenTick Image */}
//           <img
//             className="success-image"
//             src={checkmark}
//             width={100}
//             height={100}
//             alt=""
//           />

//           <h1 className="title">Success</h1>
//           <div className="description">Your application has been submitted</div>
//           <input
//             className="final-submit"
//             type="submit"
//             // Reload App
//             onClick={() => window.location.reload()}
//             value="OK"
//           />
//         </div>
//       </div>
//     </>
//   );
// };
// export default Page4Container;
import React from "react";
import "../assets/scss/success.scss";
import RenderHeader from "../components/RenderHeader";
import checkmark from "../assets/img/checkmark.png";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload";

const Page4Container = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <>
      <LazyLoad once>
        <RenderHeader headerTitle={"Registration Success"} />
        <div className="success-wrapper">
          <div className="success-box">
            {/* Success - GreenTick Image */}

            <img
              className="success-image"
              src={checkmark}
              width={100}
              height={100}
              alt=""
            />
            <h1 className="title">Success</h1>
            <div className="description">
              Your application has been submitted
            </div>
            <input
              className="final-submit"
              type="submit"
              // Reload App
              onClick={() => window.location.reload()}
              value="OK"
            />
          </div>
        </div>
      </LazyLoad>
    </>
  );
};
export default Page4Container;
