import { QueryHookOptions, useQuery } from "@apollo/client";
import { CATEGORY, CategoryQuery } from "../apollo/queries/category";

function useCategory(
  options?: QueryHookOptions<
    CategoryQuery["Response"],
    CategoryQuery["Variables"]
  >
) {
  const category = useQuery<
    CategoryQuery["Response"],
    CategoryQuery["Variables"]
  >(CATEGORY, options);
  return category;
}

export default useCategory;
