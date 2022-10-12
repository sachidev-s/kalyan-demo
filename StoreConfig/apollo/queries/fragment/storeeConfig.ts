import { gql } from "@apollo/client";
import {
  Country,
  Currency,
  StoreConfig,
} from "../../../../types/generated/graphql";

import { STORE_CONFIG_FRAGMENT } from "./storeConfig";

export const GET_STORE_CONFIG = gql`
  ${STORE_CONFIG_FRAGMENT}
  query StoreConfig {
    storeConfig {
      ...StoreConfig
    }
    availableStores {
      store_name
      store_code
      head_shortcut_icon
    }
    currency {
      default_display_currency_symbol
    }
    countries {
      full_name_english
      full_name_locale
      id
      three_letter_abbreviation
      two_letter_abbreviation
      available_regions {
        name
        code
        id
      }
    }
  }
`;

export type GetStoreConfig = {
  Response: {
    storeConfig: StoreConfig;
    availableStores: StoreConfig[];
    currency: Currency;
    countries: Country[];
  };
  Variables: {};
};
