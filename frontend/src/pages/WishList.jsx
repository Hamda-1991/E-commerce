import { useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import {
  Box,
  Button,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Rating,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { CartContext } from "../context/CartContext"; // Import CartContext

const WishList = ({ staticProducts }) => {
  const { addToCart } = useContext(CartContext); // Get addToCart from CartContext
  const [favoritedProducts, setFavoritedProducts] = useState([]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array
      .map((item) => ({ ...item, sortValue: Math.random() }))
      .sort((a, b) => a.sortValue - b.sortValue)
      .slice(0, 4);
  };

  const randomProducts = shuffleArray(staticProducts);

  // Filter favorited products
  const handleFavorite = (productId) => {
    const updatedFavorites = [...favoritedProducts];
    if (updatedFavorites.includes(productId)) {
      updatedFavorites.splice(updatedFavorites.indexOf(productId), 1); // Remove from favorites
    } else {
      updatedFavorites.push(productId); // Add to favorites
    }
    setFavoritedProducts(updatedFavorites);
  };

  if (!staticProducts) {
    return (
      <Container sx={{ marginTop: "50px", textAlign: "center" }}>
        <Typography variant="h6" color="error">
          No products available
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ marginTop: "80px" }}>
      <Stack spacing={4} sx={{ width: "100%", marginBottom: "100px" }}>
        {/* Wishlist Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">
            Wishlist ({favoritedProducts.length})
          </Typography>
          <Button
            sx={{
              width: "160px",
              height: "56px",
              padding: "16px 48px",
              backgroundColor: "#DB4444",
              color: "#fff",
              textAlign: "center",
              borderRadius: "4px",
              fontSize: "10px",
            }}
            onClick={() => setFavoritedProducts([])} // Clear wishlist on click
          >
            Clear All
          </Button>
        </Box>

        <Grid container spacing={4}>
          {staticProducts
            .filter((product) => favoritedProducts.includes(product.id))
            .map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card.id}>
                <Card sx={{ position: "relative" }}>
                  <div style={{ position: "absolute", top: "0", right: "0" }}>
                    <Button onClick={() => handleFavorite(card.id)}>
                      <FavoriteBorderOutlinedIcon
                        style={{
                          color: favoritedProducts.includes(card.id)
                            ? "#DB4444"
                            : "#000",
                        }}
                      />
                    </Button>
                    <Link to={`/ProductDetailsPage/${card.id}`}>
                      <VisibilityOutlinedIcon />
                    </Link>
                  </div>
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    height="180"
                  />
                  <CardContent>
                    <Button
                      sx={{
                        width: "100%",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                      onClick={() =>
                        addToCart({
                          id: card.id,
                          title: card.title,
                          price: card.price,
                          image: card.image,
                        })
                      }
                    >
                      <LocalGroceryStoreOutlinedIcon />
                      Add to Cart
                    </Button>
                    <Typography variant="h6">{card.title}</Typography>
                    <Typography variant="body2">${card.price}</Typography>
                    <Rating
                      name={`rating-${card.id}`}
                      value={card.rating}
                      readOnly
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Stack>

      {/* Just For You Section */}
      <Stack spacing={4} sx={{ width: "100%", marginBottom: "100px" }}>
        <Stack
          sx={{
            marginTop: "20px",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" alignItems="center" gap="10px">
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
              Just For You
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
              See All
            </Button>
          </Box>
        </Stack>
        <Grid container spacing={4}>
          {randomProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  width: "100%",
                  position: "relative",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
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
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title || "No Title"}
                  </Typography>
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
      </Stack>
    </Box>
  );
};

// PropTypes validation
WishList.propTypes = {
  staticProducts: PropTypes.array.isRequired,
};

export default WishList;
