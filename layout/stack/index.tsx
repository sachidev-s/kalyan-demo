/* eslint-disable react/require-default-props */
import React, { ForwardRefRenderFunction, memo } from 'react'
import { AllHTMLElements } from '../../types/generated/custom/htmlstypes';
import Box from '../box'

type BoxProps = React.AllHTMLAttributes<AllHTMLElements> & {
    direction ?: 'row' | 'column';
    link?: boolean;
    component?: React.ElementType;
}

const Stack: ForwardRefRenderFunction<AllHTMLElements, BoxProps> = ({className, direction, ...props}, ref) => {
  return (
    <Box ref={ref} className={`flex ${ direction === 'row' ? 'flex-row ' : 'flex-col ' }${className || ''}`} {...props} />
  )
}

export default memo(React.forwardRef(Stack))