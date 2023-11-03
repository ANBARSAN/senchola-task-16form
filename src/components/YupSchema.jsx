import * as Yup from "yup";
//yup schema for form1 validation

// Indian Mobile Phone Regular Expression
const mobileNoRegEx =
  /^((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}?$/;
//valid mobile number formats
// 9775876662
// 0 9754845789
// 0-9778545896
// +91 9456211568
// 91 9857842356
// 919578965389

// land-line number validation
const landlineRegEx = /^[0-9]\d{2,4}-\d{6,8}$/;

//six digit postcode starting with non-zero character
const postcodeRegEx = /^[1-9][0-9]{5}$/;

export const schema1 = Yup.object().shape({
  name: Yup.string().required("Name  is required"),
  email: Yup.string()
    .required("Email address is required")
    .email("Invalid email address"),
  mobileNo: Yup.string()
    .required("Mobile Number is required")
    .matches(mobileNoRegEx, "Invalid Mobile number format"),
  homeAddress1: Yup.string().required("Address Line 1  is required"),
  homeAddress2: Yup.string().required("Address Line 2  is required"),
  homeAddress3: Yup.string().required("Address Line 3  is required"),
});

//yup schema for form2 validation

export const schema2 = Yup.object().shape({
  buildingName: Yup.string().required("Building Name is required"),
  city: Yup.string().required("City Name is required"),
  
  buildingAddress1: Yup.string().required("Address Line 1  is required"),
  buildingAddress2: Yup.string().required("Address Line 2  is required"),
  postcode: Yup.string()
    .required("Postal code  is required")
    .matches(postcodeRegEx, "Invalid postal code format"),
});
