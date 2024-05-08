import React from "react";

const CommonButton = (props) => {
  return (
    <button onClick={props.onClick} key={props.key} className={`px-5 py-2 bg-black text-white font-mono text-xl rounded-lg transition-all duration-300 border border-solid border-transparent hover:border-black hover:bg-white hover:text-black ${props.className}`}>
      {props.button}
    </button>
  );
};

export default CommonButton;
