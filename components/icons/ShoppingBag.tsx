import React, { memo, SVGProps } from 'react'


  
const ShoppingBag= (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="icon / ecommerce / shopping-bag "
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="22px"
    {...props}
    className="mr-2"
    color="currentcolor"
    viewBox='0 -3 18 28'
  >
    <g data-name="Group 53">
      <path
        data-name="icon / shopping-bag"
        d="M17 22H3a2.934 2.934 0 0 1-3-3V4.6a.1.1 0 0 0 .1-.1.1.1 0 0 0 .1-.1l3-4A.9.9 0 0 1 4 0h12a.683.683 0 0 1 .7.4l3 4a.1.1 0 0 1 .1.1.1.1 0 0 1 .1.1.76.76 0 0 1 .1.4v14a2.934 2.934 0 0 1-3 3ZM2 6v13a.947.947 0 0 0 1 1h14a.947.947 0 0 0 1-1V6Zm2.5-4L3 4h14l-1.5-2ZM10 14a4.947 4.947 0 0 1-5-5 .947.947 0 0 1 1-1 .947.947 0 0 1 1 1 2.934 2.934 0 0 0 3 3 2.934 2.934 0 0 0 3-3 1 1 0 0 1 2 0 4.947 4.947 0 0 1-5 5Z"
      />
    </g>
  </svg>
)

export default memo(ShoppingBag)