  const CustomInput = (props) => {
    const { type, placeHolder, className, onChange, value, name,htmlFor,labelName,required } = props;
    return (
      <>
        <label
          htmlFor={htmlFor}
          className="text-cod-gray font-normal sm:!leading-110 lg:text-base sm:text-sm text-xs mb-3"
        >
         {labelName} <span className="text-orange">{required}</span>
        </label>
        <input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeHolder}
          className={`text-cod-gray text-xs xs:text-sm sm:text-base outline-none lg:text-lg placeholder:text-sm placeholder:lg:text-lg placeholder:sm:text-base placeholder:!leading-100 placeholder:text-cod-gray placeholder:text-opacity-60 bg-cod-gray bg-opacity-[12%] px-2 sm:px-[18px] py-4 w-full ${className}`}
        />
      </>
    );
  };
  
  export default CustomInput;
  