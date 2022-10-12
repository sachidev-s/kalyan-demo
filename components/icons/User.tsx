import React, { memo, SVGProps } from 'react'


   
const User = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="icon / user / user"
    xmlns="http://www.w3.org/2000/svg"
    width="1.7em"
    height="1.7em"
    {...props}
    className="mr-2"
    fill="currentcolor"
    viewBox='0 -3 18 28'
  >
    <g data-name="Group 17">
      <path
        data-name="icon / user"
        d="M17 20a.947.947 0 0 1-1-1v-2a2.934 2.934 0 0 0-3-3H5a2.934 2.934 0 0 0-3 3v2a.947.947 0 0 1-1 1 .947.947 0 0 1-1-1v-2a4.947 4.947 0 0 1 5-5h8a4.947 4.947 0 0 1 5 5v2a.947.947 0 0 1-1 1ZM9 10a4.947 4.947 0 0 1-5-5 4.947 4.947 0 0 1 5-5 4.947 4.947 0 0 1 5 5 4.947 4.947 0 0 1-5 5Zm0-8a2.934 2.934 0 0 0-3 3 2.934 2.934 0 0 0 3 3 2.934 2.934 0 0 0 3-3 2.934 2.934 0 0 0-3-3Z"
      />
    </g>
  </svg>
)

export default memo(User)