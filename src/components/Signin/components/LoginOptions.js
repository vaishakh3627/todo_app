import React from "react";

import { Row, Col } from "react-bootstrap";

import Facebook from "../../../assets/images/logo-facebook.svg";
import Apple from "../../../assets/images/logo-apple.svg";
import Google from "../../../assets/images/logo-google.svg";

const LoginOption = () => {
  return (
    <Col xs={12} md={6} className="contents-column2">
      <Row className="elements">
        <Col xs={10} className="login-content1">
          <img src={Facebook} className="image-content" />
          Facebook
        </Col>
        <Col xs={10} className="login-content2">
          <img src={Apple} className="image-content" />
          Apple
        </Col>
        <Col xs={10} className="login-content3">
          <img src={Google} className="image-content" />
          Google
        </Col>
      </Row>
    </Col>
  );
};
export default LoginOption;