/* eslint-disable no-param-reassign */
import { ApolloClient } from "@apollo/client";
import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import { RootState } from "../../Redux/types";
import { GET_STORE_CONFIG, GetStoreConfig } from "../apollo/queries/fragment/storeeConfig";


export interface StoreConfigState {
    data: GetStoreConfig['Response'] | null;
    error: SerializedError | null;
    status: "idle" | "loading" | "failed";
}

export const initialState: StoreConfigState = {
    data: null,
    error: null,
    status: 'idle',
}

export const fetchStoreConfig = createAsyncThunk(
    'auth/fetchStoreConfig',
    async (client: ApolloClient<object>) => {
      const response = await client.query<GetStoreConfig['Response']>({
        query: GET_STORE_CONFIG
      });
      return response.data;
    }
  );

export const storeConfigSlice = createSlice({
    name: 'storeConfig',
    initialState,
    reducers: {
        updateStoreConfigState: (state, action: PayloadAction<GetStoreConfig['Response'] | null>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchStoreConfig.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchStoreConfig.fulfilled, (state, action) => {
          state.status = 'idle';
          state.data = action.payload;
        })
        .addCase(fetchStoreConfig.rejected, (state , action) => {
          state.status = 'failed';
          state.error = action.error;
        });
    }
})

export const {updateStoreConfigState} = storeConfigSlice.actions;

export const selectStoreConfig = (state: RootState) => state.storeConfig.data;

export default storeConfigSlice.reducer;