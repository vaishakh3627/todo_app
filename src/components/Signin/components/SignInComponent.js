import { React, useState, useEffect } from "react";

import { Row, Container } from "react-bootstrap";

import SignInForm from "./SignInForm";
import LoginOption from "./LoginOptions";
import { _validateEmail } from "../../../common/validators/inputValidators";

const SignInComponent = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });
  const updateData = (data) => {
    setSignupData((previousState) => ({
      ...previousState,
      ...data,
    }));
  };

  return (
    <Container className="contents-container" fluid>
      <Row className="contents-row1">
        <SignInForm data={signupData} setData={updateData}/>
        <LoginOption />
      </Row>
    </Container>
  );
};
export default SignInComponent;
