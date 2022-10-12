import React, { memo, SVGProps } from 'react'

const Location = ({className,...props}: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1.2em"
      viewBox="0 0 16 19"
      {...props}
      className={`top-icon mr-1 icon-mobile ${className || ''}`}
    >
      <g data-name="Group 97">
        <path
          data-name="icon / map-pin"
          d="M8 19a1.147 1.147 0 0 1-.48-.159 24.332 24.332 0 0 1-3.85-3.325 16.5 16.5 0 0 1-2.529-3.444A8.85 8.85 0 0 1 0 7.916a7.819 7.819 0 0 1 2.35-5.591 8.026 8.026 0 0 1 11.3 0A7.819 7.819 0 0 1 16 7.916a8.85 8.85 0 0 1-1.141 4.156 16.5 16.5 0 0 1-2.529 3.444 24.31 24.31 0 0 1-3.85 3.325A1.137 1.137 0 0 1 8 19ZM8 1.583a6.374 6.374 0 0 0-6.4 6.333c0 4.451 5.331 8.562 6.4 9.341 1.068-.778 6.4-4.887 6.4-9.341A6.374 6.374 0 0 0 8 1.583Zm0 9.5a3.167 3.167 0 1 1 3.2-3.167A3.187 3.187 0 0 1 8 11.084Zm0-4.75a1.583 1.583 0 1 0 1.6 1.583A1.593 1.593 0 0 0 8 6.333Z"
          fill="currentcolor"
        />
      </g>
    </svg>
)

export default memo(Location)