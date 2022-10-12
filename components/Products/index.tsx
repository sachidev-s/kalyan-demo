import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { GET_PRODUCTS } from "../../Apollo/Queries/queries";
import Stack from "../../layout/stack";

import {
  ProductAttributeFilterInput,
  ProductAttributeSortInput,
  ProductInterface,
  Products,
  SimpleProduct,
} from "../../types/generated/graphql";

const ProductListing = () => {
  const productItem = useQuery<
    { products: Products; product: SimpleProduct & ProductInterface },
    {
      search?: string;
      filter?: ProductAttributeFilterInput;
      pageSize?: number;
      currentPage?: number;
      sort?: ProductAttributeSortInput;
    }
  >(GET_PRODUCTS, {
    onCompleted: (data) => {
      console.log("item", data);
    },
    onError: (error) => {
      console.log(error);
    },
    variables: {
      filter: {},
      search:
        "Spreads & Dips, Dairy, Egg & Chilled Food, Grocery, Candies & Chocolates,  Beverages & Concentrates ",
      currentPage: 1,
      pageSize: 50,
      sort: {},
    },
  });

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ height: "100%" }}
      className="mt-3"
    >
      {productItem.data?.products?.items?.map((product) => (
        <Grid item xs={2} sm={3} md={3} key={product?.uid}>
          <Card
            className="mt-5  ms-4"
            sx={{ maxWidth: 250, marginBottom: 3 }}
            style={{ width: "100%" }}
          >
            <Typography gutterBottom variant="h6" component="div"></Typography>
            <Typography
              gutterBottom
              component="div"
              style={{ fontSize: "13px", fontWeight: "bold" }}
            >
              {product?.name}
            </Typography>
            <CardMedia
              component="img"
              width="100%"
              height="200%"
              image={product?.image?.url!}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product?.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontWeight: "bold" }}
              >
                {product?.sku}
              </Typography>
            </CardContent>
            <CardActions>
              <Stack style={{ backgroundColor: "red", borderRadius: "18px" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  style={{
                    backgroundColor: "orange",
                    borderRadius: "18px",
                    height: "40px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    width: "100px",
                  }}
                >
                  Add to Cart
                </Button>
                <Button style={{ color: "white" }}>-</Button>
                <Button style={{ color: "white" }}>+</Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductListing;
