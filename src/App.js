import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Cardbody from "./components";
const App = () => {
  let check = faCheck;
  return (
    <Container>
      <Row style={{ height: "50px" }}>
        <Col></Col>
      </Row>
      <Row>
        <Col style={{ width: "100%" }}>
          {/* first card */}
          <Cardbody
            title="FREE"
            price="0"
            iconUser={check}
            users="Single User"
            iconStorage={check}
            storage="5GB Storage"
            iconPrivateProjects={faTimes}
            iconPhoneSupport={faTimes}
            iconFreeSubdomain={faTimes}
            f
            iconMonthlyStatus={faTimes}
            dim={true}
          />
        </Col>
        <br></br>
        <Col style={{ width: "100%" }}>
          {/* second card */}
          <Cardbody
            title="PLUS"
            price="9"
            iconUser={check}
            users="5 Users"
            iconStorage={check}
            storage="50GB Storage"
            iconPrivateProjects={check}
            iconPhoneSupport={check}
            iconFreeSubdomain={check}
            f
            iconMonthlyStatus={faTimes}
            bold={true}
            dimSecond={true}
          />
        </Col>
        <br></br>
        <Col style={{ width: "100%" }}>
          {/* third card */}
          <Cardbody
            title="PRO"
            price="49"
            iconUser={check}
            users={`Unlimited Users`}
            iconStorage={check}
            storage="150GB Storage"
            iconPrivateProjects={check}
            iconPhoneSupport={check}
            iconFreeSubdomain={check}
            freeSubdomain="Unlimited "
            iconMonthlyStatus={check}
            bold={true}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default App;
