import React from 'react'

const SubHeading = ({className,children}) => {
  return (
  <h2 className={`xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-black font-semibold leading-[120%] ${className}`}>
{children}
  </h2>
  )
}

export default SubHeading