import React, { ForwardRefRenderFunction, memo } from 'react'
import { AllHTMLElements } from '../../types/generated/custom/htmlstypes';

export type BoxProps = React.AllHTMLAttributes<AllHTMLElements> & {
  // eslint-disable-next-line react/require-default-props
  link?: boolean;
  // eslint-disable-next-line react/require-default-props
  component?: React.ElementType;
}

const Box: ForwardRefRenderFunction<AllHTMLElements, BoxProps> = ({link, component, ...props}, ref) => {
  if(component) {
    return React.createElement(component, {...props, ref});
  }
  if (link) {
    return <a ref={ref} {...props} >{props.children}</a>
  }
  return (
    <div ref={ref} {...props} />
  )
}

export default memo(React.forwardRef(Box))
