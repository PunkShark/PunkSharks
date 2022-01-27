import React from "react";
import { BsDashLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function FAQTutorial({ title, answer }) {
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
        <p className=" teko fs-30px weight-4 font-bold">How do I get a PunkShark?</p>{" "}
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
           <ul className="flex flex-col gap-3">
               <li>1. Download and install a Chrome browser plugin called MetaMask.</li>
               <li>2. Add the Polygon network to your MetaMask manually or automatically using this link <a href="https://quickswap.exchange/#/swap" className="underline text-blue-600 mx-1 hover:text-yellow-500" target="_blank">https://quickswap.exchange/#/swap</a> just click on “Switch to Matic”.</li>
               <li>3. Get MATIC on Polygon from an exchange (e.g. Kucoin) and send it to your Polygon address on MetaMask.</li>
               <li>4. Swap MATIC to WETH within MetaMask or by using Quickswap.</li>
               <li>5. Buy PunkShark NFT with WETH.</li>
           </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQTutorial;