/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';

import storeConfig from '../StoreConfig/slices/storeConfig';

export const store = configureStore({
  reducer: {

    storeConfig,
   
  },
});

