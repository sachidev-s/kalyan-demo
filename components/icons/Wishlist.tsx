import React, { memo, SVGProps } from 'react'


type WishlistIconProps = SVGProps<SVGSVGElement> & {
  active?: boolean
}
const Wishlist: React.FC<WishlistIconProps> = ({active ,...props}) => (

  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props} className="mr-2" viewBox="0 0 22 20">
     
    
    <g data-name="Group 833">
   
      <path
        d="M20.233 1.881A6.049 6.049 0 0 0 15.9 0a6.268 6.268 0 0 0-4.432 1.881l-.385.4-.385-.4a6.1 6.1 0 0 0-8.768 0A6.307 6.307 0 0 0 0 6.436a6.623 6.623 0 0 0 1.831 4.554l8.478 8.71a.914.914 0 0 0 1.349 0l8.479-8.713a6.623 6.623 0 0 0 1.831-4.554 5.471 5.471 0 0 0-1.735-4.552Z"
        
        fill="currentColor"
        
      />
      <path
        data-name="Path"
        d="m18.756 9.802-7.8 8.02-7.8-8.02a4.4 4.4 0 0 1-1.261-3.169 4.839 4.839 0 0 1 1.253-3.168 3.954 3.954 0 0 1 2.986-1.287 4.159 4.159 0 0 1 3.083 1.287l1.06 1.089a.914.914 0 0 0 1.349 0l.963-1.089a4.627 4.627 0 0 1 3.18-1.287 4.575 4.575 0 0 1 3.083 1.287 4.839 4.839 0 0 1 1.253 3.168 4.494 4.494 0 0 1-1.349 3.169Z"
        fill={active ? "currentColor" : "#fff"}
      />
    </g>
  </svg>
)

Wishlist.defaultProps = {
  active: false,
}

export default memo(Wishlist)