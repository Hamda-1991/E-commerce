import { useState } from "react";
import { Box, Stack, Typography, IconButton, Button } from "@mui/material";
import CurrentDateTime from "./CurrentDateTime";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

const ToDaysProducts = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const products = ["aaa", "bbb", "ccc", "ddd", "eee"];

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevProduct = () => {
    setCurrentProductIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const handleViewAllProducts = () => {
    console.log("View all products clicked");
  };

  return (
    <Box
      sx={{
        marginTop: { xs: "100px", sm: "60px", md: "80px" },
        padding: { xs: "10px", sm: "20px", md: "30px" },
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <Box>
          <svg
            width="15"
            height="35"
            viewBox="0 0 20 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="40" rx="4" fill="#DB4444" />
          </svg>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontWeight: "600",
            color: "rgba(219, 68, 68, 1)",
          }}
        >
          Today’s
        </Typography>
      </Stack>
      <Stack
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: { xs: "20px", md: "40px" },
          }}
        >
          <Typography
            sx={{
              font: "enter",
              fontSize: { xs: "24px", sm: "30px", md: "36px" },
              fontWeight: "600",
              color: "rgba(0, 0, 0, 1)",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Flash Sales
          </Typography>
          <Box>
            <CurrentDateTime />
          </Box>
        </Stack>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "10px", sm: "20px" },
          }}
        >
          <IconButton aria-label="previous product" onClick={handlePrevProduct}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 5L4 12L11 19M4 12H20" stroke="black" />
            </svg>
          </IconButton>
          <IconButton aria-label="next product" onClick={handleNextProduct}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" />
            </svg>
          </IconButton>
        </Box>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexDirection: "row",
          flexWrap: { xs: "nowrap", md: "wrap" },
          justifyContent: { md: "center" },

          marginTop: "50px",
        }}
      >
        <ProductList key={products[currentProductIndex]} />
      </Stack>
      <Box sx={{ margin: "30px", textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgba(219, 68, 68, 1)",
            color: "rgba(250, 250, 250, 1)",
            fontSize: "16px",
            fontWeight: "500",
          }}
          onClick={handleViewAllProducts}
          component={Link}
          to="/Product"
        >
          View All Products
        </Button>
      </Box>
    </Box>
  );
};

export default ToDaysProducts;
