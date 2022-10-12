/* eslint-disable react/require-default-props */
import React, { memo } from 'react'
import Box from '../box'

type BoxProps = React.AllHTMLAttributes<HTMLDivElement> & {
    item?: boolean;
    container?: boolean;
}

const Grid: React.FC<BoxProps> = ({className, item, container, ...rest}) => {
  return (
    <Box className={`${container ? 'grid-container' : ''} ${className || ''}`} {...rest} />
  )
}

export default memo(Grid)