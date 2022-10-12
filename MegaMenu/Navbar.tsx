
import React, { useState,memo } from 'react'
import CategoryIcon from '../components/icons/CategoryIcon';
import DropdownMenu from './components/DropdownMenu';
import useCategory from './hooks/useCategory';
import dynamic from "next/dynamic";
import Box from '../layout/box/index';
import Container from '../layout/container';
import Stack from '../layout/stack';
import Typography from '../typography';
const DynamicCategoryIcon = dynamic(
  () => import("../components/icons/CategoryIcon"),
  {
    ssr: false,
  }
);

const menuItems = {
  child: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "contact us",
      href: "/contact",
    },
  ],
};

const NavBar = () => {
  const categories = useCategory();
  const [notHover, setNotHover] = useState(false);
  return (
    <Box className="menu-wrapper hidden md:block">
      <Container className="nav-wrapper-container">
        <Stack direction="row" className="gap-6 items-center nav-wrapper">
          {categories.data?.categories?.items?.map((item) => (
            <Stack
              key={item?.name}
              direction="row"
              onClick={() => {
                setNotHover(true);
              }}
              onMouseEnter={() => {
                setNotHover(false);
              }}
              className={`items-center gap-2 category-hover ${notHover ? 'not-hover' : ''}`}
            >
              <Typography className="menu-item">
                <DynamicCategoryIcon />
              </Typography>
             
              <DropdownMenu items={item?.children} />
            </Stack>
          ))}
         
        </Stack>
      </Container>
    </Box>
  );
};

export default memo(NavBar);
