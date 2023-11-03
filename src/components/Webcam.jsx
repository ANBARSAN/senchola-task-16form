import React, { useState } from "react";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import { pics } from "../store/rootSlice";

// Webcamera access and take snapshot using third party library react-webcam

const WebcamComponent = () => <Webcam />;

// Video size configurations

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

// Taking snapshot on capture and dispatch Image source to Redux Store
export const WebcamCapture = () => {
  const [image, setImage] = useState("");
  const webcamRef = React.useRef(null);
  const dispatch = useDispatch();
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    dispatch(pics(imageSrc));
  });

  return (
    <div className="webcam-container">
      <div className="webcam-img">
        {image === "" ? (
          <Webcam
            audio={false}
            height={200}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={220}
            videoConstraints={videoConstraints}
            alt=""
          />
        ) : (
          <img src={image} alt="" />
        )}
      </div>
      <div>
        {image !== "" ? (
          ""
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="webcam-btn"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
};
