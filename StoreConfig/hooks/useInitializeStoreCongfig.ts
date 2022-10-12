import { useApolloClient } from "@apollo/client";
import { useEffect } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { fetchStoreConfig } from "../slices/storeConfig";

function useInitializeStoreConfig() {
  const dispatch = useAppDispatch();
  const client = useApolloClient();
  useEffect(() => {
    dispatch(fetchStoreConfig(client));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
}

export default useInitializeStoreConfig;
