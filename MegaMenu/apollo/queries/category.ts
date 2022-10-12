import { gql } from "@apollo/client";
import { CategoryFilterInput, CategoryResult, Maybe } from "../../../types/generated/graphql";

export const CATEGORY = gql`
  query getCategories(
    $filter: CategoryFilterInput
    $pagesize: Int
    $page: Int
  ) {
    categories(filters: $filter, pageSize: $pagesize, currentPage: $page) {
      items {
        name
        url_path
        children {
          name
          include_in_menu
          url_key
          url_path
          uid
          children {
            name
            include_in_menu
            url_key
            url_path
          }
        }
      }
    }
  }
`;

export type CategoryQuery = {
    Response: {
        categories: Maybe<CategoryResult>;
    };
    Variables: {
        filter?: CategoryFilterInput;
        pagesize?: number;
        page?: number;
    };
  };
  