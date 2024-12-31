import {
  Box,
  Stack,
  Typography,
  Rating,
  Checkbox,
  Button,
} from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import ProductList from "../components/ProductList";

const ProductDetailsPage = () => {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <Box sx={{ mt: { xs: 3, sm: 5, md: 7 } }}>
      <div>
        <Link to="/Account" style={{ textDecoration: "none", color: "#777" }}>
          Account /
        </Link>
        <Link to="/Product" style={{ textDecoration: "none", color: "#777" }}>
          Product /
        </Link>
        Contact
      </div>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ mt: { xs: 2, md: 5 } }}
      >
        <Box sx={{ flex: 1 }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "60%", height: "auto", padding: "20px" }}
          />
        </Box>
        <Box sx={{ flex: 1, p: { xs: 1, md: 2 } }}>
          <Stack sx={{ borderBottom: "1px solid #777", mb: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: "600", mb: 2 }}>
              {product.title}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Rating
                name="size-small"
                defaultValue={product.rating}
                size="small"
              />
              <Typography variant="body2" sx={{ color: "#777" }}>
                (150 Reviews)
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(0, 255, 102, 1)" }}
              >
                In Stock
              </Typography>
            </Stack>
            <Typography variant="h5" sx={{ mb: 2 }}>
              $
              {product.discountedPrice
                ? product.discountedPrice.toFixed(2)
                : product.price.toFixed(2)}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Typography variant="body1">Colours:</Typography>
            <Checkbox icon={<CircleIcon />} checkedIcon={<CircleIcon />} />
            <Checkbox
              icon={<CircleIcon sx={{ color: "rgba(224, 117, 117, 1)" }} />}
              checkedIcon={<CircleIcon />}
            />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Typography variant="body1">Size:</Typography>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <Button
                key={size}
                sx={{
                  width: 32,
                  height: 32,
                  border: "1px solid #777",
                  borderRadius: 1,
                  color: "#000",
                  ":hover": {
                    backgroundColor: "rgba(219, 68, 68, 1)",
                    color: "#fff",
                  },
                }}
              >
                {size}
              </Button>
            ))}
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Box>
              <svg
                width="159"
                height="44"
                viewBox="0 0 159 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H39.5V43.5H4C2.067 43.5 0.5 41.933 0.5 40V4Z"
                  stroke="black"
                  strokeOpacity="0.5"
                />
                <path
                  d="M28 22H12"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <mask id="path-4-inside-1_287_5109" fill="white">
                  <path d="M39 0H119V44H39V0Z" />
                </mask>
                <path
                  d="M39 1H119V-1H39V1ZM119 43H39V45H119V43Z"
                  fill="black"
                  fillOpacity="0.5"
                  mask="url(#path-4-inside-1_287_5109)"
                />
                <path
                  d="M75.46 25.9C76.74 24.7933 77.7467 23.8867 78.48 23.18C79.2267 22.46 79.8467 21.7133 80.34 20.94C80.8333 20.1667 81.08 19.3933 81.08 18.62C81.08 17.82 80.8867 17.1933 80.5 16.74C80.1267 16.2867 79.5333 16.06 78.72 16.06C77.9333 16.06 77.32 16.3133 76.88 16.82C76.4533 17.3133 76.2267 17.98 76.2 18.82H74C74.04 17.3 74.4933 16.14 75.36 15.34C76.24 14.5267 77.3533 14.12 78.7 14.12C80.1533 14.12 81.2867 14.52 82.1 15.32C82.9267 16.12 83.34 17.1867 83.34 18.52C83.34 19.48 83.0933 20.4067 82.6 21.3C82.12 22.18 81.54 22.9733 80.86 23.68C80.1933 24.3733 79.34 25.18 78.3 26.1L77.4 26.9H83.74V28.8H74.02V27.14L75.46 25.9Z"
                  fill="black"
                />
                <path
                  d="M118 0H155C157.209 0 159 1.79086 159 4V40C159 42.2091 157.209 44 155 44H118V0Z"
                  fill="#DB4444"
                />
                <path
                  d="M139 30V22M139 22V14M139 22H147M139 22H131"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Box>
            <Button
              sx={{
                width: 165,
                height: 44,
                border: "1px solid #777",
                borderRadius: 1,
                backgroundColor: "rgba(219, 68, 68, 1)",
                color: "#fff",
                fontSize: 16,
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "rgba(219, 68, 68, 0.8)",
                },
              }}
              component={Link}
              to="/CheckOut"
            >
              Buy Now
            </Button>
            <Button>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </Stack>
          <img
            src="src/images/Frame 911.jpg"
            alt="Promo"
            style={{ width: "100%" }}
          />
        </Box>
      </Stack>
      <Box display="flex" alignItems="center" gap={2} my={4}>
        <svg
          width="15"
          height="35"
          viewBox="0 0 20 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="40" rx="4" fill="#DB4444" />
        </svg>
        <Typography
          sx={{
            fontSize: { xs: 12, sm: 14, md: 16 },
            fontWeight: "600",
            color: "rgba(219, 68, 68, 1)",
          }}
        >
          Related Items
        </Typography>
      </Box>
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

export default ProductDetailsPage;
