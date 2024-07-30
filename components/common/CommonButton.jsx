import React from "react";

const CommonButton = ({children,onClick,key,className}) => {
  return (
    <button onClick={onClick} key={key} className={`px-5 py-2 bg-black text-white font-mono text-xl rounded-lg transition-all duration-500 border border-solid border-transparent hover:border-black hover:bg-white hover:text-black ${className}`}>
      {children}
    </button>
  );
};

export default CommonButton;
