import React from 'react'

const Paragraph = ({className,children}) => {
  return (
  <p className={`lg:text-2xl md:text-xl sm:text-lg text-base text-black font-medium leading-[150%] ${className}`}>
{children}
  </p>
  )
}

export default Paragraph