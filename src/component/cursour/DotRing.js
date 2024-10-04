import React, { useContext } from "react";
import Cursour from "./Cursour";
import "./cursour.scss";
import { MouseContext } from "../mouseContext/MouseContextProvider";

const DotRing = () => {
  const cursorType = useContext(MouseContext);
  const { x, y } = Cursour();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
