import React, { useState } from "react";

const Test = () => {
  const [msg, setMsg] = useState("hello");

  return (
    <div>
      <button
        onClick={() => {
          setMsg("Use effect is working");
        }}
      >
        Click here to check React
      </button>
      {msg}
    </div>
  );
};

export default Test;
