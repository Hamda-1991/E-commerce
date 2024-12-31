import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";

const ThisMonth = () => {
  return (
    <Box sx={{ marginTop: "140px" }}>
      <Container>
        <Stack direction="row" alignItems="center" gap="6px">
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
            This Month
          </Typography>
        </Stack>
        <Stack
          sx={{
            marginTop: "20px",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: { xs: "20px", md: "40px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "30px", md: "36px" },
                fontWeight: "600",
                color: "rgba(0, 0, 0, 1)",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Best Selling Products
            </Typography>
          </Stack>
          <Box>
            <Button
              sx={{
                width: "160px",
                height: "56px",
                padding: "16px 48px",
                color: "rgba(250, 250, 250, 1)",
                backgroundColor: "rgba(219, 68, 68, 1)",
                textAlign: "center",
                borderRadius: "4px",
                fontSize: "12px",
              }}
              variant="contained"
              component={Link}
              to="/Product"
            >
              View All
            </Button>
          </Box>
        </Stack>
      </Container>

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
        <ProductList />
      </Stack>
    </Box>
  );
};

export default ThisMonth;
