import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Cardbody = (props) => {
  //dim some text
  let dimClass = [];
  if (props.dim === true) {
    dimClass.push("dim");
  }
  //second card dim the last line.
  let dimClassSecond = [];
  if (props.dimSecond === true) {
    dimClassSecond.push("dim2");
  }

  // bold letter
  let textClass = [];
  if (props.bold === true) {
    textClass.push("done");
  }
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <div class="a col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">
                {props.title}
              </h5>
              <h6 class="card-price text-center">
                ${props.price}
                <span class="period">/month</span>
              </h6>
              <br></br>
              <hr></hr>
              <ul class="fa-ul">
                <li>
                  <span class="fa-li ">
                    <FontAwesomeIcon className="b" icon={props.iconUser} />
                  </span>
                  <span class={textClass.join("")}>{props.users}</span>
                </li>
                <li>
                  <span class="fa-li">
                    <FontAwesomeIcon className="b" icon={props.iconStorage} />
                  </span>
                  {props.storage}
                </li>
                <li>
                  <span class="fa-li">
                    <FontAwesomeIcon className="b" icon={faCheck} />
                  </span>
                  Unlimited Public Projects
                </li>
                <li>
                  <span class="fa-li">
                    <FontAwesomeIcon className="b" icon={faCheck} />
                  </span>
                  Community Access
                </li>
                <li class={dimClass.join("")}>
                  <span class="fa-li">
                    <FontAwesomeIcon
                      className="b"
                      icon={props.iconPrivateProjects}
                    />
                  </span>
                  Unlimited Private Projects
                </li>
                <li class={dimClass.join("")}>
                  <span class="fa-li">
                    <FontAwesomeIcon
                      className="b"
                      icon={props.iconPhoneSupport}
                    />
                  </span>
                  Dedicated Phone Support
                </li>
                <li class={dimClass.join("")}>
                  <span class="fa-li">
                    <FontAwesomeIcon
                      className="b"
                      icon={props.iconFreeSubdomain}
                    />
                  </span>
                  <span class={textClass.join("")}>{props.freeSubdomain}</span>
                  Free Subdomain
                </li>
                <li class={`${dimClass.join("")}${dimClassSecond.join("")}`}>
                  <span class="fa-li">
                    <FontAwesomeIcon
                      className="b"
                      icon={props.iconMonthlyStatus}
                    />
                  </span>
                  Monthly Status Reports
                </li>
              </ul>
              <div class="d-grid">
                <a href="#" class="btn btn-primary text-uppercase">
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cardbody;
