import Image from "next/image";
// import Image from "next/image";
import React, { memo } from "react";
import Box from "../../layout/box/index";
import Stack from "../../layout/stack/index";

import { useAppSelector } from "../../Redux/hooks";
import { CategoryTree, Maybe } from "../../types/generated/graphql";

interface DropdownMenuProps {
  items?: Maybe<Maybe<CategoryTree>[]>;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  const storeConfig = useAppSelector((state:any) => state.storeConfig.data?.storeConfig);
  return (
    <Box className="megamenu-container md:block">
      <Stack direction="row" className="w-full p-4 megamenu-wrapper">
        <Stack
          direction="row"
          className="items-container flex-wrap"
        >
          {items?.map((lists) => {
            if (!lists?.include_in_menu) return null;
            return (
              <Stack key={lists?.name} className="menu-sub-item">
                <>
                <link href={`${lists.url_path}${storeConfig?.category_url_suffix}`}>
                  <h5  className="category-title">
                    {lists?.name}
                  </h5>
                </link>
                {lists?.children?.map((child) => {
                  if (!child?.include_in_menu) return null;
                  return (
                    <link href={`${child.url_path}${storeConfig?.category_url_suffix}`} key={child?.name} >
                      <h5 className="text-xs my-2 category-item">
                        {child?.name}
                      </h5>
                    </link>
                  );
                })}
                </>
              </Stack>

            );
          })}
        </Stack>
        <Box className="image-container">
          <Image
            src="/assets/images/Banner Sale.png"
            layout="fill"
            alt="Banner Sale"
            className="category-banner"
          />
        </Box>
      </Stack>
    </Box>
  );
};

DropdownMenu.defaultProps = {
  items: [],
};

export default memo(DropdownMenu);
