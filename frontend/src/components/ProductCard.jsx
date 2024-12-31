import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActions,
  Rating,
  Button,
} from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const handleViewDetails = () => {
    navigate("/ProductDetailsPage", { state: { product } });
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const { image, title, price, discountedPrice, rating } = product;

  return (
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
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          top: "0",
          right: "0",
        }}
      >
        <Button component={Link} to="/WishList">
          <FavoriteBorderOutlinedIcon
            style={{ color: "#000", backgroundColor: "#fff" }}
          />
        </Button>
        <Button onClick={handleViewDetails}>
          <VisibilityOutlinedIcon
            style={{ color: "#000", backgroundColor: "#fff" }}
          />
        </Button>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "60%", height: "auto", margin: "0 auto" }}
        image={image}
        title={title}
      />
      <CardContent sx={{ gap: "7px" }}>
        <Button
          sx={{
            width: "100%",
            height: "41px",
            borderRadius: "0 0 4px 4px",
            backgroundColor: "#000",
            color: "#fff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5px 0",
          }}
          onClick={handleAddToCart}
        >
          <LocalGroceryStoreOutlinedIcon />
          <div>Add To Cart</div>
        </Button>
        <Typography variant="h6">{title}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {discountedPrice !== undefined && (
            <Typography
              sx={{
                color: "rgba(219, 68, 68, 1)",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              ${discountedPrice.toFixed(2)}
            </Typography>
          )}
          {price !== undefined && discountedPrice !== undefined && (
            <Typography
              sx={{
                color: "#777",
                fontSize: "16px",
                fontWeight: "500",
                textDecoration: "line-through",
              }}
            >
              ${price.toFixed(2)}
            </Typography>
          )}
        </Box>
      </CardContent>
      <CardActions>
        <Rating name="read-only" value={rating} readOnly />
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
