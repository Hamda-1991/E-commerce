import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Rating,
  Link,
} from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PropTypes from "prop-types";

const Product = ({ staticProducts }) => {
  const [visibleCards, setVisibleCards] = useState(4);

  if (!staticProducts) {
    return (
      <Box sx={{ marginTop: "50px", textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Failed to load products
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ marginTop: "100px" }}>
      <Typography variant="h4" component="div" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4}>
        {staticProducts.slice(0, visibleCards).map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                width: "100%",
                position: "relative",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  top: "0",
                  right: "0",
                }}
              >
                <Button>
                  <FavoriteBorderOutlinedIcon
                    style={{ color: "#000", backgroundColor: "#fff" }}
                  />
                </Button>
                <Link to={`/ProductDetailsPage/${product.id}`}>
                  <VisibilityOutlinedIcon
                    style={{ color: "#000", backgroundColor: "#fff" }}
                  />
                </Link>
              </Box>

              <CardMedia
                component="img"
                sx={{ width: "60%", height: "auto", margin: "0 auto" }}
                alt={product.title || "Product Image"}
                height="180"
                image={product.image}
              />

              <CardContent>
                <Button
                  sx={{
                    width: "100%",
                    height: "41px",
                    borderRadius: "0 0 4px 4px",
                    backgroundColor: "#000",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <LocalGroceryStoreOutlinedIcon />
                  <div>Add To Cart</div>
                </Button>
                <Typography
                  gutterBottom
                  variant="h6 small"
                  component="div"
                  color="rgba(0, 0, 0, 1)"
                  marginTop="15px"
                >
                  {product.title || "No Title"}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(219, 68, 68, 1)",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    ${product.price || "N/A"}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textDecoration: "line-through",
                      color: "#777",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    ${product.discountedPrice || "N/A"}
                  </Typography>
                </Box>

                <Rating
                  name={`rating-${product.id}`}
                  value={product.rating || 0}
                  readOnly
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {visibleCards < staticProducts.length && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginY: "50px" }}
        >
          <Button
            onClick={() => setVisibleCards((prev) => prev + 4)}
            sx={{
              width: "190px",
              height: "56px",
              padding: "16px 48px",
              borderRadius: "4px",
              backgroundColor: "rgba(219, 68, 68, 1)",
              color: "#fff",
              ":hover": {
                backgroundColor: "#fff",
                color: "rgba(219, 68, 68, 1)",
              },
            }}
          >
            Show More
          </Button>
        </Box>
      )}
    </Box>
  );
};

// Add PropTypes for validation
Product.propTypes = {
  staticProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discountedPrice: PropTypes.number,
      rating: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Product;
