import React, { memo } from 'react'
import Box from '../../layout/box'
import NavBar from '../Navbar'
// import DropdownMenu from './DropdownMenu'

const HeaderMenu = () => {
  return (
    <Box>
        <NavBar/>
    </Box>
  )
}

export default memo(HeaderMenu)