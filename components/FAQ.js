import React from "react";
import { BsDashLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function FAQ({ title, answer }) {
  const [show, setShow] = React.useState(false);
  const accordionBody = React.useRef();

  const handler = () => {
    setShow(!show);
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-btn ${show ? "active" : ""}`}
        onClick={handler}
      >
        <p className=" teko fs-30px weight-4 font-bold">{title}</p>{" "}
        <div className="acordion-header-icon">
          {show ? <BsDashLg /> : <AiOutlinePlus style={{fontSize: "20px"}} />}
        </div>
      </div>
      <div
        className="accordion-body"
        style={{
          height: show ? accordionBody?.current?.scrollHeight + "px" : 0,
        }}
        ref={accordionBody}
      >
        <div className="accordion-content">
          <p className="fs-18px weight-5 lh-26px">
           { answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;