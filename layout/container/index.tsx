
import React, { ForwardRefRenderFunction, memo } from 'react'
import Box from '../box'

type ContainerProps = React.AllHTMLAttributes<HTMLDivElement & HTMLAnchorElement & HTMLFormElement> & {
  // eslint-disable-next-line react/require-default-props
  maxWidth?:"sm" | "md" | "lg" | "xl" | "2xl" |"3xl" | "4xl"
}

const Container: ForwardRefRenderFunction<HTMLDivElement & HTMLAnchorElement & HTMLFormElement, ContainerProps> = ({className,maxWidth, ...props}, ref) => {
  const screenClassName = `max-w-screen-${maxWidth || "4xl"}`
  return (
    <Box ref={ref} className={`p-4 ${screenClassName} mx-auto w-full ${className || ''}`} {...props}/>
  )
}


export default memo(React.forwardRef(Container))